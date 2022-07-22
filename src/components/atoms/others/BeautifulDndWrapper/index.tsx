import styles from './style.module.scss'
import { ReactNode } from 'react'
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
} from 'react-beautiful-dnd'
import sortAndInsert from '@/components/atoms/others/BeautifulDndWrapper/sortAndInsert'

type Props<T> = {
	droppableId: string
	dataKey: string
	onDrop: (attrs: {
		from: number
		to: number
		data: T[]
		error?: string
	}) => void
	isDragDisabled?: boolean
	data: T[]
	children: (row: T) => ReactNode
	className?: string
}
export default function BeautifulDndWrapper<T>({
	droppableId,
	data,
	dataKey,
	onDrop,
	isDragDisabled,
	children,
}: Props<T>) {
	const handleDrop = (result: DropResult) => {
		const from = result.source.index
		const to = result.destination?.index
		if (to === undefined || from === to) return
		const sorted = sortAndInsert<T>(data, from, to)
		onDrop({ from, to, data: sorted.data, error: sorted.error })
	}

	return (
		<DragDropContext onDragEnd={handleDrop}>
			<Droppable droppableId={droppableId} direction="vertical">
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{data.map((row, i) => {
							return (
								<Draggable
									key={(row as any)[dataKey] as string}
									draggableId={(row as any)[dataKey] as string}
									index={i}
									isDragDisabled={isDragDisabled}
								>
									{provided => (
										<div
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											{children(row)}
										</div>
									)}
								</Draggable>
							)
						})}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}

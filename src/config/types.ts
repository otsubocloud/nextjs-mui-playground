export type DesignSource = {
	canvas: CanvasData
	data: DesignData
}
export type MetaData = {
	id: string
	name: string
	directory?: string
	updated?: string
	type: 'design' | 'directory'
}
export type CanvasData = {
	width: number
	height: number
}

export type SizeData = {
	width: number
	height: number
}
export type SizeDataPayload = {
	width?: number
	height?: number
}

export type DesignData = DesignItem[]

export type DesignItemType =
	| 'rect'
	| 'circle'
	| 'path'
	| 'line'
	| 'text'
	| 'multiple'
	| 'group'

export type DesignItem = {
	type: DesignItemType
	subType?: 'normal'
	// decorations
	fill: ColorData
	stroke: ColorData
	strokeWidth: number
	blended: boolean
	radius: number
	// position & sizes
	x: number
	y: number
	width: number
	height: number
	rotate: number
	// extended
	path?: FreePathData
	text?: TextData
	items?: DesignItem[]
	// not used
	name?: 'Rect'
	deform?: {}
	pattern?: PatternData
	patternVisible?: boolean
	reversed?: boolean
	invisible?: boolean
}

export type DesignItemPayload = {
	type?: DesignItemType
	subType?: 'normal'
	name?: 'Rect'
	// decorations
	fill?: ColorData
	stroke?: ColorData
	strokeWidth?: number
	blended?: boolean
	radius?: number
	// position & sizes
	x?: number
	y?: number
	width?: number
	height?: number
	rotate?: number
	// extended
	path?: FreePathData
	text?: TextData
	// not used
	deform?: {}
	pattern?: PatternData
	patternVisible?: boolean
}

export type ColorData = {
	h: number
	s: number
	l: number
	a: number
}
export type ColorDataPayload = {
	h?: number
	s?: number
	l?: number
	a?: number
}

export type TextData = {
	id: string
	value: string
	align: TextAlign
	lineHeight: number
	fontSize: number
	fontWeight: number
}
export type TextDataPayload = {
	id?: string
	value?: string
	align?: TextAlign
	lineHeight?: number
	fontSize?: number
	fontWeight?: number
}
export type TextAlign = 'left' | 'center' | 'right' | 'justify'

export type PatternData = {
	data?: { repeatX: number; repeatY: number; sizeX: number; sizeY: number }
	colors?: { fill1: ColorData }
	type?: 'cross'
	subType?: 'normal'
}

export type FreePathData = {
	closePath?: boolean
	radius?: number
	points?: PositionData[]
}

export type PositionData = { x: number; y: number }
export type RectData = {
	x: number
	y: number
	width: number
	height: number
	rotate?: number
}
export type RectDataPayload = {
	x?: number
	y?: number
	width?: number
	height?: number
	rotate?: number
}

export type ScaleData = {
	scaleX: number
	scaleY: number
}

// - - - -
// UI
export type CursorType = 'cursor' | 'cross'
export type CurrentToolItemType =
	| 'path'
	| 'shape'
	| 'text'
	| 'selects'
	| 'line'
	| 'free'
	| 'circle'
	| 'rect'
export type ToolItemType = 'path' | 'shape' | 'text' | 'selects'
export type ToolItemSubType = 'line' | 'free' | 'circle' | 'rect'

export type EditingColorType = 'fill' | 'stroke' | 'pattern'
export type EditingTabType = 'transform' | 'color'
export type ResizeBasePoint =
	| 'TL'
	| 'T'
	| 'TR'
	| 'L'
	| 'C'
	| 'R'
	| 'BL'
	| 'B'
	| 'BR'

// - - - -
// DASHBOARD

export type DashboardSource = {
	recentlyItems: DashboardDesignItem[]
	rootItems: DashboardDesignItem[]
	directories: DashboardDirectoryItem[]
}

export type DashboardDirectoryItem = {
	meta: MetaData
	children: DashboardDesignItem[]
}
export type DashboardDesignItem = {
	meta: MetaData
	original: DesignSource
}

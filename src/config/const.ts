import {
	DesignItem,
	DesignSource,
	FreePathData,
	TextData,
} from '@/config/types'

// - - -
// NODE

export const API_DATA_ROOT = './public/@src/@data'
export const ORIGINAL_FILE = 'original.json'
export const DISPLAY_NAME_FILE = '.display_name'
export const SORT_FILE = '.sort'
export const HISTORIES_FOLDER = 'histories'
export const PINS_FOLDER = 'pins'
export const ROOT_DIR_NAME = '@root'

// - - -
// UI DATA TYPES
export const EDITING_CANVAS_ID = 'editing-canvas'
export const EDITING_CANVAS_PADDING = 40
export const CURSOR_ID = 'cursor'
export const SELECTED_ID = 'selected'
export const RESIZE_POINT_ID = 'resize_point'
export const SELECTION_ID = 'selection'

// - - -
// DESIGN DATA TYPES

export const DEFAULT_CANVAS_SIZE = {
	width: 652,
	height: 803,
}
export const DEFAULT_STROKE_WIDTH = 3
export const DEFAULT_BLANK_COLOR = { h: 0, s: 0, l: 50, a: 1 }
export const BLANK_FILL = { h: 0, s: 0, l: 40, a: 100 }
export const BLANK_STROKE = { h: 100, s: 0, l: 20, a: 100 }

export const BLANK_DESIGN_ITEM: DesignItem = {
	type: 'rect',
	subType: 'normal',
	name: 'Rect',
	fill: BLANK_FILL,
	stroke: BLANK_STROKE,
	strokeWidth: 0,
	blended: false,
	x: 10,
	y: 10,
	width: 50,
	height: 50,
	rotate: 0,
	radius: 0,
	deform: {
		basic: undefined,
		sub: undefined,
		ex: undefined,
		ex2: undefined,
	},
	pattern: {},
}
export const BLANK_PATH: FreePathData = {
	closePath: false,
	radius: 3,
	points: [],
}
export const BLANK_DESIGN_SOURCE: DesignSource = {
	canvas: {
		width: 400,
		height: 600,
	},
	data: [],
}

export const DEFAULT_FONT_SIZE = 16
export const MIN_FONT_SIZE = 6
export const BLANK_TEXT_VALUE = 'ある朝日差しが'
export const BLANK_TEXT_DATA: TextData = {
	id: '',
	value: BLANK_TEXT_VALUE,
	align: 'left',
	fontSize: 16,
	fontWeight: 400,
	lineHeight: 1.5,
}

export const STATIC_TEXT_ATTRS = {
	fontFamily: 'Rubik, Noto Sans JP',
	letterSpacing: 0,
}

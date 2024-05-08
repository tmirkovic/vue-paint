
export interface State {
    crop?: Crop
    history: Shape[]
    settings: Settings
}

export interface Settings {
    tool: Tool
    thickness: number
    color: string
}

export interface Crop {
    x: number
    y: number
    height: number
    width: number
}

export type Shape = Rectangle | Line

export interface Rectangle {
    type: "rectangle"
    x: number
    y: number
    height: number
    width: number
    thickness: number
    color: string
}

export interface Line {
    type: "line"
    x1: number
    y1: number
    x2: number
    y2: number
    thickness: number
    color: string
}

export type Tool = "crop" | "line" | "rectangle"


export interface State {
    crop?: Crop
    tool: Tool
    history: Shape[]
    thickness: number
    color: string
}

export interface Crop {
    x: number
    y: number
    height: number
    width: number
}

export type Shape = Rectangle 

export interface Rectangle {
    type: "rectangle"
    x: number
    y: number
    height: number
    width: number
    thickness: number
    color: string
}

export type Tool = "crop" | "line" | "rectangle"

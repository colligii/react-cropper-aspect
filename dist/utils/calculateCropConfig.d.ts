import { RefObject } from "react";
import { CropConfig, IncreaseStr, RenderImageSize } from "../types";
export declare const calculateCropConfig: ({ data, mouseX, mouseY, width, height, renderSize, aspect, resizeDownRef }: CalculateProps) => CropConfig;
export interface CalculateProps {
    data: CropConfig;
    mouseX: number;
    mouseY: number;
    width: number;
    height: number;
    renderSize: RenderImageSize;
    aspect: number;
    resizeDownRef: RefObject<IncreaseStr | null>;
}

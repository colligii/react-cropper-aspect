import { RefObject } from "react";
import { ConfirmImageFunction, CropConfig, ImageCropStepProps, OriginalImageSize, Proportions, RenderImageSize, SizeConfig } from "./types";
export declare const Canvas: ({ canvasRef, aspect, confirmImage, cropConfig, imageUrl, originalImageSize, proportions, renderSize, sizeConfig, step, canvasClassName }: CanvasProps) => import("react/jsx-runtime").JSX.Element;
export interface CanvasProps {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    aspect: number;
    confirmImage: ConfirmImageFunction;
    cropConfig: CropConfig;
    imageUrl: string;
    originalImageSize: RefObject<OriginalImageSize | null>;
    proportions: Proportions;
    renderSize: RenderImageSize | null;
    sizeConfig: SizeConfig;
    step: ImageCropStepProps;
    canvasClassName?: string;
}

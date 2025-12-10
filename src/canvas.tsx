import { RefObject } from "react"
import { useCanvaConfig } from "./hooks/useCanvaConfig"
import { ConfirmImageFunction, CropConfig, ImageCropStepProps, OriginalImageSize, Proportions, RenderImageSize, SizeConfig } from "./types"

export const Canvas = ({ canvasRef, aspect, confirmImage, cropConfig, imageUrl, originalImageSize, proportions, renderSize, sizeConfig, step, canvasClassName }: CanvasProps) => {

    const canvasProps: { className?: string } = {};

    if(canvasClassName) {
       canvasProps.className = canvasClassName; 
    }

    useCanvaConfig({
        aspect,
        canvasRef,
        confirmImage,
        cropConfig,
        imageUrl,
        originalImageSize,
        proportions,
        renderSize,
        sizeConfig,
        step
    })

    return <canvas
        ref={canvasRef}
        {...canvasProps}
    >
    </canvas>
}

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
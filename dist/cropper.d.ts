import { Dispatch, RefObject, SetStateAction } from "react";
import { ConfirmImageFunction, CropConfig, ImageCropStepProps, OriginalImageSize, Proportions, RenderImageSize, SizeConfig } from "./types";
export default function Cropper({ imageUrl, proportions, sizeConfig, aspect, step, confirmImage, cropConfig, setCropConfig, renderSize, setRenderSize, originalImageSize }: CropperProps): import("react/jsx-runtime").JSX.Element | undefined;
export interface CropperProps {
    imageUrl: string;
    proportions: Proportions;
    sizeConfig: SizeConfig;
    aspect: number;
    step: ImageCropStepProps;
    confirmImage: ConfirmImageFunction;
    cropConfig: CropConfig;
    setCropConfig: Dispatch<SetStateAction<CropConfig>>;
    renderSize: RenderImageSize | null;
    setRenderSize: Dispatch<SetStateAction<RenderImageSize | null>>;
    originalImageSize: RefObject<OriginalImageSize | null>;
}

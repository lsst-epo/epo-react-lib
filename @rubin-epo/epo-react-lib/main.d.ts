import { AnimationEventHandler } from 'react';
import { AriaRole } from 'react';
import { ChangeEventHandler } from 'react';
import { ClipboardEventHandler } from 'react';
import { ComponentType } from 'react';
import { CompositionEventHandler } from 'react';
import { CSSProperties } from 'react';
import { DetailedHTMLProps } from 'react';
import { DragEventHandler } from 'react';
import { ExecutionProps } from 'styled-components';
import { FocusEventHandler } from 'react';
import { FormEventHandler } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { FunctionComponent } from 'react';
import { HTMLAttributeAnchorTarget } from 'react';
import { HTMLAttributeReferrerPolicy } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { HTMLProps } from 'react';
import { IStyledComponent } from 'styled-components';
import { Key } from 'react';
import { KeyboardEventHandler } from 'react';
import { LegacyRef } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { MouseEventHandler } from 'react';
import { NamedExoticComponent } from 'react';
import { PointerEventHandler } from 'react';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactEventHandler } from 'react';
import { ReactNode } from 'react';
import { ReactSliderProps } from 'react-slider';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { RuleSet } from 'styled-components';
import { Substitute } from 'styled-components/dist/types';
import { TouchEventHandler } from 'react';
import { TransitionEventHandler } from 'react';
import { UIEventHandler } from 'react';
import { WheelEventHandler } from 'react';
import { YouTubePlayerProps } from 'react-player/youtube';

export declare const Accordion: FunctionComponent<AccordionProps>;

declare interface AccordionProps {
    summary: string;
    children: ReactNode;
}

declare interface BaseProgressProps {
    min?: number;
    max?: number;
    value?: number;
    labelledById?: string;
    describedById?: string;
    className?: string;
    markerFormatter?: (value: number) => string;
}

declare type BaseSliderProps = Pick<ReactSliderProps<number | readonly number[]>, "value" | "min" | "max" | "step" | "className" | "ariaValuetext" | "defaultValue">;

export declare const BasicModal: FunctionComponent<BasicModalProps>;

declare interface BasicModalProps {
    children: ReactNode;
    open?: boolean;
    onClose: (event?: MouseEvent_2) => void;
    darkMode?: boolean;
    title?: string;
    description?: string;
}

export declare const Button: ForwardRefExoticComponent<Omit<PropsWithChildren<ButtonProps>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const Buttonish: FunctionComponent<ButtonishProps>;

declare interface ButtonishProps extends ButtonProps {
    text: string;
    url?: string;
    prefetch?: boolean;
}

declare interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    className?: string;
    icon?: IconKey;
    iconSize?: IconComposerProps["size"];
    isBlock?: boolean;
    styleAs?: ButtonStyleAs;
    /** This is a disabled style without disabling the button.
     * Good for a11y - button is visible even if form isn't complete.
     */
    isInactive?: boolean;
}

declare type ButtonStyleAs = "primary" | "secondary" | "tertiary" | "educator";

export declare const CarouselLayout: FunctionComponent<CarouselLayoutProps>;

declare interface CarouselLayoutProps {
    children: ReactNode;
    options?: CarouselOptions;
    className?: string;
}

declare interface CarouselOptions {
    selectedAttraction?: number;
    friction?: number;
    pageDots?: boolean;
    prevNextButtons?: boolean;
    lazyLoad?: boolean;
    adaptiveHeight?: boolean;
    initialIndex?: number;
    ariaLabel?: string;
    wrapAround?: boolean;
    percentPosition?: boolean;
}

export declare const cContentRte: RuleSet<object>;

export declare const CircularLoader: FunctionComponent<CircularLoaderProps>;

declare interface CircularLoaderProps {
    withOverlay?: boolean;
    isVisible?: boolean;
    speed?: Styled.LoaderSpeed;
    description?: string;
    className?: string;
}

export declare const ColorSwatch: FunctionComponent<ColorSwatchProps>;

declare interface ColorSwatchProps {
    className?: string;
    content?: string;
    color: string;
    size?: SwatchSize;
}

export declare const Columns: IStyledComponent<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ColumnsProps>>;

declare interface ColumnsProps {
    $width?: number;
    $gap?: number;
}

export declare const ComplexTable: FunctionComponent<ComplexTableProps>;

declare interface ComplexTableCell {
    id: string;
    cellBackground?: string;
    hasFlexibleCellWidth?: boolean;
    cellWidth?: number;
    cellContent: string;
}

declare interface ComplexTableProps {
    complexTable: ComplexTableRow[];
    plainText?: string;
    verticalAlignment?: string;
    styleAs?: "primary" | "secondary";
    isChild?: boolean;
}

declare interface ComplexTableRow {
    tableRow: ComplexTableCell[];
}

export declare const Container: FunctionComponent<PropsWithChildren<ContainerProps>>;

export declare const containerFull: () => string;

export declare const containerFullBleed: (width?: string) => string;

export declare const containerMax: () => string;

export declare const containerNarrow: () => string;

export declare const containerNews: () => string;

declare interface ContainerProps {
    bgColor?: keyof typeof palette_2;
    className?: string;
    width?: Styled_3.ContainerWidth;
    /** Applies padding utility class of the same name.
     * Default is "large", "none" removes the class entirely */
    paddingSize?: SpacingSize | "none";
    elAttributes?: Partial<HTMLElement>;
}

export declare const containerRegular: () => string;

export declare const containerWide: () => string;

export declare const CopyUrlButton: FunctionComponent<Pick<ShareButtonProps, "url" | "className" | "showText">>;

export declare const EmailButton: FunctionComponent<ShareButtonProps>;

export declare const encodeColor: (string: string) => string;

declare const Error_2: FunctionComponent<HTMLProps<HTMLParagraphElement>>;
export { Error_2 as Error }

export declare const ExpandToggle: FunctionComponent<ExpandToggleProps>;

declare interface ExpandToggleProps extends HTMLProps<HTMLButtonElement> {
    isOpen: boolean;
    onToggle: MouseEventHandler<HTMLButtonElement>;
    controlsId: string;
    isHidden: boolean;
}

export declare const ExternalLink: FunctionComponent<ExternalLinkProps>;

declare interface ExternalLinkProps extends HTMLProps<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
}

export declare const FacebookButton: FunctionComponent<ShareButtonProps>;

export declare const Figure: FunctionComponent<PropsWithChildren<FigureProps>>;

declare interface FigureProps {
    layout?: "horizontal" | "vertical";
    caption?: string;
    withBackground?: boolean;
    className?: string;
}

export declare function fluidScale(max: string, min: string, maxVw?: string, minVw?: string): any;

export declare const FormButtons: IStyledComponent<"web", {
    ref?: LegacyRef<HTMLDivElement> | undefined;
    key?: Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    children?: ReactNode;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "time" | "step" | "true" | "false" | "page" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionEndCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStart?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStartCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdate?: CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdateCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
    onFocus?: FocusEventHandler<HTMLDivElement> | undefined;
    onFocusCapture?: FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: FocusEventHandler<HTMLDivElement> | undefined;
    onBlurCapture?: FocusEventHandler<HTMLDivElement> | undefined;
    onChange?: FormEventHandler<HTMLDivElement> | undefined;
    onChangeCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onInput?: FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onReset?: FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onError?: ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChange?: ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onEmptied?: ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStart?: ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onResize?: ReactEventHandler<HTMLDivElement> | undefined;
    onResizeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onWaiting?: ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onDrag?: DragEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEnd?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDragStart?: DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMove?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUp?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnter?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnterCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeave?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOver?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOut?: PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
    onScroll?: UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEnd?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIteration?: AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIterationCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
    onTransitionEnd?: TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?: TransitionEventHandler<HTMLDivElement> | undefined;
}>;

export declare const FormField: FunctionComponent<FormFieldProps>;

declare interface FormFieldProps {
    label: string;
    children: ReactNode;
    htmlFor: string;
    required?: boolean;
    error?: string;
    description?: string;
}

declare interface GalleryEntry {
    galleryItemCategory: GalleryItemCategory[];
    id: string;
    image: ImageShape[];
    title: string;
    uri: string;
}

declare interface GalleryItemCategory {
    id: string;
    slug: string;
    title: string;
}

export declare const GlobalStyles: NamedExoticComponent<ExecutionProps & {
    includeFonts?: boolean | undefined;
}>;

export declare const Grid: FunctionComponent<GridProps>;

declare interface GridProps extends Partial<Styled_4.GridProps> {
    children: ReactNode;
}

export declare const HorizontalSlider: FunctionComponent<HorizontalSliderProps>;

declare interface HorizontalSliderProps extends BaseSliderProps {
    onChangeCallback: ReactSliderProps<number | readonly number[]>["onChange"];
    label: string;
    minLabel?: string;
    maxLabel?: string;
    labelledbyId?: string;
    color?: string;
    darkMode?: boolean;
    isDisabled?: boolean;
}

/**
 * IconComposer receives the name of an icon and renders it. Additionally, custom icons can be passed
 * to the component which can then be re-exported so another project can provide its own icons and
 * overwrite the included icons.
 *
 * When adding icons, name the icon based on the content of the icon rather than it's associated action.
 * For example a floppy disk icon should be named "FloppyDisk" and not "Save", there could be multiple
 * icons associated with the action "Save" but there is only one floppy disk.
 */
export declare const IconComposer: FunctionComponent<IconComposerProps>;

declare interface IconComposerProps extends SVGProps {
    icon: IconKey | string;
    customIcons?: {
        [key: string]: ComponentType<SVGProps>;
    };
    size?: number | string;
}

export declare type IconKey = keyof typeof icons;

export declare const icons: {
    Account: FunctionComponent<SVGProps>;
    ArrowUpFromBracket: FunctionComponent<SVGProps>;
    Backward: FunctionComponent<SVGProps>;
    BackwardStep: FunctionComponent<SVGProps>;
    Calendar: FunctionComponent<SVGProps>;
    Cancel: FunctionComponent<SVGProps>;
    CaretDown: FunctionComponent<SVGProps>;
    CheckeredFlag: FunctionComponent<SVGProps>;
    Checkmark: FunctionComponent<SVGProps>;
    CheckmarkCircle: FunctionComponent<SVGProps>;
    CircularLoader: FunctionComponent<SVGProps>;
    Chevron: FunctionComponent<SVGProps>;
    ChevronLeftElongated: FunctionComponent<SVGProps>;
    ChevronRightElongated: FunctionComponent<SVGProps>;
    ChevronThin: FunctionComponent<SVGProps>;
    Close: FunctionComponent<SVGProps>;
    CloseCircle: FunctionComponent<SVGProps>;
    Cloud: FunctionComponent<SVGProps>;
    Doc: FunctionComponent<SVGProps>;
    DocArrowRight: FunctionComponent<SVGProps>;
    DocInverted: FunctionComponent<SVGProps>;
    Email: FunctionComponent<SVGProps>;
    Expand: FunctionComponent<SVGProps>;
    Eye: FunctionComponent<SVGProps>;
    Facebook: FunctionComponent<SVGProps>;
    FloppyDisk: FunctionComponent<SVGProps>;
    Forward: FunctionComponent<SVGProps>;
    ForwardStep: FunctionComponent<SVGProps>;
    Globe: FunctionComponent<SVGProps>;
    Google: FunctionComponent<SVGProps>;
    Hamburger: FunctionComponent<SVGProps>;
    Info: FunctionComponent<SVGProps>;
    InfoCircle: FunctionComponent<SVGProps>;
    Instagram: FunctionComponent<SVGProps>;
    Lightbulb: FunctionComponent<SVGProps>;
    LinkedIn: FunctionComponent<SVGProps>;
    LockClosed: FunctionComponent<SVGProps>;
    LockOpen: FunctionComponent<SVGProps>;
    LogOut: FunctionComponent<SVGProps>;
    Mail: FunctionComponent<SVGProps>;
    Minus: FunctionComponent<SVGProps>;
    Page: FunctionComponent<SVGProps>;
    Pause: FunctionComponent<SVGProps>;
    Phone: FunctionComponent<SVGProps>;
    Pin: FunctionComponent<SVGProps>;
    Play: FunctionComponent<SVGProps>;
    Plus: FunctionComponent<SVGProps>;
    QuestionCircle: FunctionComponent<SVGProps>;
    RotateLeft: FunctionComponent<SVGProps>;
    RotateLeftWithCenter: FunctionComponent<SVGProps>;
    Search: FunctionComponent<SVGProps>;
    ShareCopyUrl: FunctionComponent<SVGProps>;
    ShareEmail: FunctionComponent<SVGProps>;
    ShareFacebook: FunctionComponent<SVGProps>;
    ShareToggle: FunctionComponent<SVGProps>;
    ShareTwitter: FunctionComponent<SVGProps>;
    Team: FunctionComponent<SVGProps>;
    Temp: FunctionComponent<SVGProps>;
    Thumbtack: FunctionComponent<SVGProps>;
    Time: FunctionComponent<SVGProps>;
    Timer: FunctionComponent<SVGProps>;
    Twitter: FunctionComponent<SVGProps>;
    User: FunctionComponent<SVGProps>;
    UserInverted: FunctionComponent<SVGProps>;
    Video: FunctionComponent<SVGProps>;
    YouTube: FunctionComponent<SVGProps>;
    Pdf: FunctionComponent<SVGProps>;
    Word: FunctionComponent<SVGProps>;
};

declare const Image_2: FunctionComponent<ImageProps>;
export { Image_2 as Image }

declare interface ImageProps {
    image: ImageShape;
    className?: string;
    title?: string;
    [key: string]: any;
}

declare interface ImageShape {
    altText?: string;
    width?: number;
    height?: number;
    url: string;
    url2x?: string;
    url3x?: string;
    thumb?: string;
    thumb2x?: string;
}

export declare const Input: IStyledComponent<"web", {
    ref?: LegacyRef<HTMLInputElement> | undefined;
    key?: Key | null | undefined;
    accept?: string | undefined;
    alt?: string | undefined;
    autoComplete?: string | undefined;
    capture?: boolean | "user" | "environment" | undefined;
    checked?: boolean | undefined;
    crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
    disabled?: boolean | undefined;
    enterKeyHint?: "search" | "enter" | "done" | "go" | "next" | "previous" | "send" | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    height?: string | number | undefined;
    list?: string | undefined;
    max?: string | number | undefined;
    maxLength?: number | undefined;
    min?: string | number | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    size?: number | undefined;
    src?: string | undefined;
    step?: string | number | undefined;
    type?: HTMLInputTypeAttribute | undefined;
    value?: string | number | readonly string[] | undefined;
    width?: string | number | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    children?: ReactNode;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "time" | "step" | "true" | "false" | "page" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: ClipboardEventHandler<HTMLInputElement> | undefined;
    onCopyCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
    onCut?: ClipboardEventHandler<HTMLInputElement> | undefined;
    onCutCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
    onPaste?: ClipboardEventHandler<HTMLInputElement> | undefined;
    onPasteCapture?: ClipboardEventHandler<HTMLInputElement> | undefined;
    onCompositionEnd?: CompositionEventHandler<HTMLInputElement> | undefined;
    onCompositionEndCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
    onCompositionStart?: CompositionEventHandler<HTMLInputElement> | undefined;
    onCompositionStartCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
    onCompositionUpdate?: CompositionEventHandler<HTMLInputElement> | undefined;
    onCompositionUpdateCapture?: CompositionEventHandler<HTMLInputElement> | undefined;
    onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
    onFocusCapture?: FocusEventHandler<HTMLInputElement> | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
    onBlurCapture?: FocusEventHandler<HTMLInputElement> | undefined;
    onChangeCapture?: FormEventHandler<HTMLInputElement> | undefined;
    onBeforeInput?: FormEventHandler<HTMLInputElement> | undefined;
    onBeforeInputCapture?: FormEventHandler<HTMLInputElement> | undefined;
    onInput?: FormEventHandler<HTMLInputElement> | undefined;
    onInputCapture?: FormEventHandler<HTMLInputElement> | undefined;
    onReset?: FormEventHandler<HTMLInputElement> | undefined;
    onResetCapture?: FormEventHandler<HTMLInputElement> | undefined;
    onSubmit?: FormEventHandler<HTMLInputElement> | undefined;
    onSubmitCapture?: FormEventHandler<HTMLInputElement> | undefined;
    onInvalid?: FormEventHandler<HTMLInputElement> | undefined;
    onInvalidCapture?: FormEventHandler<HTMLInputElement> | undefined;
    onLoad?: ReactEventHandler<HTMLInputElement> | undefined;
    onLoadCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onError?: ReactEventHandler<HTMLInputElement> | undefined;
    onErrorCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyPress?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<HTMLInputElement> | undefined;
    onAbort?: ReactEventHandler<HTMLInputElement> | undefined;
    onAbortCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onCanPlay?: ReactEventHandler<HTMLInputElement> | undefined;
    onCanPlayCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onCanPlayThrough?: ReactEventHandler<HTMLInputElement> | undefined;
    onCanPlayThroughCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onDurationChange?: ReactEventHandler<HTMLInputElement> | undefined;
    onDurationChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onEmptied?: ReactEventHandler<HTMLInputElement> | undefined;
    onEmptiedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onEncrypted?: ReactEventHandler<HTMLInputElement> | undefined;
    onEncryptedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onEnded?: ReactEventHandler<HTMLInputElement> | undefined;
    onEndedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onLoadedData?: ReactEventHandler<HTMLInputElement> | undefined;
    onLoadedDataCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onLoadedMetadata?: ReactEventHandler<HTMLInputElement> | undefined;
    onLoadedMetadataCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onLoadStart?: ReactEventHandler<HTMLInputElement> | undefined;
    onLoadStartCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onPause?: ReactEventHandler<HTMLInputElement> | undefined;
    onPauseCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onPlay?: ReactEventHandler<HTMLInputElement> | undefined;
    onPlayCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onPlaying?: ReactEventHandler<HTMLInputElement> | undefined;
    onPlayingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onProgress?: ReactEventHandler<HTMLInputElement> | undefined;
    onProgressCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onRateChange?: ReactEventHandler<HTMLInputElement> | undefined;
    onRateChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onResize?: ReactEventHandler<HTMLInputElement> | undefined;
    onResizeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onSeeked?: ReactEventHandler<HTMLInputElement> | undefined;
    onSeekedCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onSeeking?: ReactEventHandler<HTMLInputElement> | undefined;
    onSeekingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onStalled?: ReactEventHandler<HTMLInputElement> | undefined;
    onStalledCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onSuspend?: ReactEventHandler<HTMLInputElement> | undefined;
    onSuspendCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onTimeUpdate?: ReactEventHandler<HTMLInputElement> | undefined;
    onTimeUpdateCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onVolumeChange?: ReactEventHandler<HTMLInputElement> | undefined;
    onVolumeChangeCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onWaiting?: ReactEventHandler<HTMLInputElement> | undefined;
    onWaitingCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onAuxClick?: MouseEventHandler<HTMLInputElement> | undefined;
    onAuxClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onClick?: MouseEventHandler<HTMLInputElement> | undefined;
    onClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLInputElement> | undefined;
    onContextMenuCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onDoubleClick?: MouseEventHandler<HTMLInputElement> | undefined;
    onDoubleClickCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onDrag?: DragEventHandler<HTMLInputElement> | undefined;
    onDragCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onDragEnd?: DragEventHandler<HTMLInputElement> | undefined;
    onDragEndCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onDragEnter?: DragEventHandler<HTMLInputElement> | undefined;
    onDragEnterCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onDragExit?: DragEventHandler<HTMLInputElement> | undefined;
    onDragExitCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onDragLeave?: DragEventHandler<HTMLInputElement> | undefined;
    onDragLeaveCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onDragOver?: DragEventHandler<HTMLInputElement> | undefined;
    onDragOverCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onDragStart?: DragEventHandler<HTMLInputElement> | undefined;
    onDragStartCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onDrop?: DragEventHandler<HTMLInputElement> | undefined;
    onDropCapture?: DragEventHandler<HTMLInputElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseDownCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseEnter?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseMove?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseMoveCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseOut?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseOutCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseOver?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseOverCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseUp?: MouseEventHandler<HTMLInputElement> | undefined;
    onMouseUpCapture?: MouseEventHandler<HTMLInputElement> | undefined;
    onSelect?: ReactEventHandler<HTMLInputElement> | undefined;
    onSelectCapture?: ReactEventHandler<HTMLInputElement> | undefined;
    onTouchCancel?: TouchEventHandler<HTMLInputElement> | undefined;
    onTouchCancelCapture?: TouchEventHandler<HTMLInputElement> | undefined;
    onTouchEnd?: TouchEventHandler<HTMLInputElement> | undefined;
    onTouchEndCapture?: TouchEventHandler<HTMLInputElement> | undefined;
    onTouchMove?: TouchEventHandler<HTMLInputElement> | undefined;
    onTouchMoveCapture?: TouchEventHandler<HTMLInputElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLInputElement> | undefined;
    onTouchStartCapture?: TouchEventHandler<HTMLInputElement> | undefined;
    onPointerDown?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerDownCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerMove?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerMoveCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerUp?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerUpCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerCancel?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerCancelCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerEnter?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerEnterCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerLeave?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerOver?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerOverCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerOut?: PointerEventHandler<HTMLInputElement> | undefined;
    onPointerOutCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onGotPointerCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onLostPointerCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<HTMLInputElement> | undefined;
    onScroll?: UIEventHandler<HTMLInputElement> | undefined;
    onScrollCapture?: UIEventHandler<HTMLInputElement> | undefined;
    onWheel?: WheelEventHandler<HTMLInputElement> | undefined;
    onWheelCapture?: WheelEventHandler<HTMLInputElement> | undefined;
    onAnimationStart?: AnimationEventHandler<HTMLInputElement> | undefined;
    onAnimationStartCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
    onAnimationEnd?: AnimationEventHandler<HTMLInputElement> | undefined;
    onAnimationEndCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
    onAnimationIteration?: AnimationEventHandler<HTMLInputElement> | undefined;
    onAnimationIterationCapture?: AnimationEventHandler<HTMLInputElement> | undefined;
    onTransitionEnd?: TransitionEventHandler<HTMLInputElement> | undefined;
    onTransitionEndCapture?: TransitionEventHandler<HTMLInputElement> | undefined;
}>;

export declare const layoutGrid: (columns?: number, gapDesktop?: string, gapMobile?: string, breakPoint?: string) => string;

export declare const Link: IStyledComponent<"web", {
    ref?: LegacyRef<HTMLAnchorElement> | undefined;
    key?: Key | null | undefined;
    download?: any;
    href?: string | undefined;
    hrefLang?: string | undefined;
    media?: string | undefined;
    ping?: string | undefined;
    target?: HTMLAttributeAnchorTarget | undefined;
    type?: string | undefined;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    children?: ReactNode;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "time" | "step" | "true" | "false" | "page" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCopyCapture?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCut?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCutCapture?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onPaste?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onPasteCapture?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCompositionEnd?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionEndCapture?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionStart?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionStartCapture?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionUpdate?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionUpdateCapture?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onFocus?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onFocusCapture?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onBlur?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onBlurCapture?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onChange?: FormEventHandler<HTMLAnchorElement> | undefined;
    onChangeCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onBeforeInput?: FormEventHandler<HTMLAnchorElement> | undefined;
    onBeforeInputCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInput?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInputCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onReset?: FormEventHandler<HTMLAnchorElement> | undefined;
    onResetCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onSubmit?: FormEventHandler<HTMLAnchorElement> | undefined;
    onSubmitCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInvalid?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInvalidCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onLoad?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onError?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onErrorCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyPress?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onAbort?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onAbortCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlay?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayThrough?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayThroughCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onDurationChange?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onDurationChangeCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEmptied?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEmptiedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEncrypted?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEncryptedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEnded?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEndedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedData?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedDataCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedMetadata?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedMetadataCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadStart?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadStartCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPause?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPauseCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlay?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlayCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlaying?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlayingCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onProgress?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onProgressCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onRateChange?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onRateChangeCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onResize?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onResizeCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeeked?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeekedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeeking?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeekingCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onStalled?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onStalledCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSuspend?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSuspendCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onTimeUpdate?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onTimeUpdateCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onVolumeChange?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onVolumeChangeCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onWaiting?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onWaitingCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onAuxClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onAuxClickCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onClickCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onContextMenuCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onDoubleClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onDoubleClickCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onDrag?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnd?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEndCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnter?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnterCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragExit?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragExitCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragLeave?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragLeaveCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragOver?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragOverCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragStart?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragStartCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDrop?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDropCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseDownCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseEnter?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseMove?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseMoveCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOut?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOutCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOver?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOverCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseUp?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseUpCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onSelect?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSelectCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onTouchCancel?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchCancelCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchEnd?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchEndCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchMove?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchMoveCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchStartCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onPointerDown?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerDownCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerMove?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerMoveCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerUp?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerUpCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerCancel?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerCancelCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerEnter?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerEnterCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerLeave?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOver?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOverCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOut?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOutCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onGotPointerCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onLostPointerCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onScroll?: UIEventHandler<HTMLAnchorElement> | undefined;
    onScrollCapture?: UIEventHandler<HTMLAnchorElement> | undefined;
    onWheel?: WheelEventHandler<HTMLAnchorElement> | undefined;
    onWheelCapture?: WheelEventHandler<HTMLAnchorElement> | undefined;
    onAnimationStart?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationStartCapture?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationEnd?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationEndCapture?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationIteration?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationIterationCapture?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onTransitionEnd?: TransitionEventHandler<HTMLAnchorElement> | undefined;
    onTransitionEndCapture?: TransitionEventHandler<HTMLAnchorElement> | undefined;
}>;

declare interface ListboxOption {
    value: string;
    label: string;
    icon?: ReactElement;
}

export declare const Marker: IStyledComponent<"web", Substitute<Substitute<Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
}>, MarkerProps>, MarkerProps>>;

declare interface MarkerProps extends SimpleValue {
    $active?: boolean;
    $filled?: boolean;
    $hoverable?: boolean;
    $background?: string;
}

export declare const MasonryGrid: FunctionComponent<MasonryGridProps>;

declare interface MasonryGridProps {
    items: GalleryEntry[];
    randomize?: boolean;
}

declare interface MenuButtonProps {
    type?: "button";
    text: string;
    icon: IconKey;
}

export declare const MenuGroup: FunctionComponent<PropsWithChildren<MenuGroupProps>>;

declare interface MenuGroupProps {
    title: string;
}

export declare function MenuItem(props: PropsWithChildren<MenuLinkProps>): ReactElement;

export declare function MenuItem(props: PropsWithChildren<MenuButtonProps>): ReactElement;

export declare namespace MenuItem {
    var displayName: string;
}

export declare const MenuItemRadio: FunctionComponent<MenuItemRadioProps>;

declare interface MenuItemRadioProps {
    text: string;
    isChecked: boolean;
    onCheckCallback: (close?: boolean) => void;
}

declare interface MenuLinkProps extends HTMLProps<HTMLAnchorElement> {
    type?: "link";
    text: string;
    icon: IconKey;
}

export declare const MixedLink: FunctionComponent<PropsWithChildren<MixedLinkProps>>;

declare interface MixedLinkElement {
    uri: string;
}

declare interface MixedLinkProps extends HTMLProps<HTMLAnchorElement> {
    type?: string;
    url: string;
    customText?: string;
    text?: string;
    element?: MixedLinkElement;
    className?: string;
    params?: {
        [key: string]: string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean>;
    };
    prefetch?: boolean;
}

export declare const needsDarkColor: (hexColor: string) => boolean;

declare interface Option_2 {
    value: string;
    label: string;
    optionGroup?: string;
}

export declare const palette: (color: string) => string;

declare const palette_2: {
    [key: string]: string;
};

export declare const Password: ForwardRefExoticComponent<Omit<HTMLProps<HTMLInputElement>, "ref"> & RefAttributes<HTMLInputElement>>;

export declare const ProgressBar: FunctionComponent<PropsWithChildren<ProgressBarProps>>;

declare interface ProgressBarProps extends BaseProgressProps {
    markerConfig?: {
        $active?: boolean;
        $background?: string;
        $hoverable?: boolean;
        $filled?: boolean;
    };
}

export declare const ProgressRadial: FunctionComponent<ProgressRadialProps>;

declare interface ProgressRadialProps extends BaseProgressProps {
    darkMode?: boolean;
    role?: "progressbar" | "meter";
}

export declare const protoContainer: (maxWidth?: string, widePadding?: string, narrowPadding?: string) => string;

/**
 * Converts pt to em
 * pt values are rounded down to the nearest px
 */
export declare const ptToEm: (pt: string, base?: string) => string;

export declare const pxToEm: (px: string, base?: string) => string;

export declare const respond: (content: string, size?: string, operator?: string, aspect?: string) => any;

export declare const ResponsiveImage: FunctionComponent<ResponsiveImageProps>;

declare interface ResponsiveImageProps extends ImageProps {
    ratio: string;
}

export declare const ScreenreaderText: IStyledComponent<"web", {
    ref?: LegacyRef<HTMLSpanElement> | undefined;
    key?: Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    children?: ReactNode;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "time" | "step" | "true" | "false" | "page" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: ClipboardEventHandler<HTMLSpanElement> | undefined;
    onCopyCapture?: ClipboardEventHandler<HTMLSpanElement> | undefined;
    onCut?: ClipboardEventHandler<HTMLSpanElement> | undefined;
    onCutCapture?: ClipboardEventHandler<HTMLSpanElement> | undefined;
    onPaste?: ClipboardEventHandler<HTMLSpanElement> | undefined;
    onPasteCapture?: ClipboardEventHandler<HTMLSpanElement> | undefined;
    onCompositionEnd?: CompositionEventHandler<HTMLSpanElement> | undefined;
    onCompositionEndCapture?: CompositionEventHandler<HTMLSpanElement> | undefined;
    onCompositionStart?: CompositionEventHandler<HTMLSpanElement> | undefined;
    onCompositionStartCapture?: CompositionEventHandler<HTMLSpanElement> | undefined;
    onCompositionUpdate?: CompositionEventHandler<HTMLSpanElement> | undefined;
    onCompositionUpdateCapture?: CompositionEventHandler<HTMLSpanElement> | undefined;
    onFocus?: FocusEventHandler<HTMLSpanElement> | undefined;
    onFocusCapture?: FocusEventHandler<HTMLSpanElement> | undefined;
    onBlur?: FocusEventHandler<HTMLSpanElement> | undefined;
    onBlurCapture?: FocusEventHandler<HTMLSpanElement> | undefined;
    onChange?: FormEventHandler<HTMLSpanElement> | undefined;
    onChangeCapture?: FormEventHandler<HTMLSpanElement> | undefined;
    onBeforeInput?: FormEventHandler<HTMLSpanElement> | undefined;
    onBeforeInputCapture?: FormEventHandler<HTMLSpanElement> | undefined;
    onInput?: FormEventHandler<HTMLSpanElement> | undefined;
    onInputCapture?: FormEventHandler<HTMLSpanElement> | undefined;
    onReset?: FormEventHandler<HTMLSpanElement> | undefined;
    onResetCapture?: FormEventHandler<HTMLSpanElement> | undefined;
    onSubmit?: FormEventHandler<HTMLSpanElement> | undefined;
    onSubmitCapture?: FormEventHandler<HTMLSpanElement> | undefined;
    onInvalid?: FormEventHandler<HTMLSpanElement> | undefined;
    onInvalidCapture?: FormEventHandler<HTMLSpanElement> | undefined;
    onLoad?: ReactEventHandler<HTMLSpanElement> | undefined;
    onLoadCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onError?: ReactEventHandler<HTMLSpanElement> | undefined;
    onErrorCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLSpanElement> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<HTMLSpanElement> | undefined;
    onKeyPress?: KeyboardEventHandler<HTMLSpanElement> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<HTMLSpanElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLSpanElement> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<HTMLSpanElement> | undefined;
    onAbort?: ReactEventHandler<HTMLSpanElement> | undefined;
    onAbortCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onCanPlay?: ReactEventHandler<HTMLSpanElement> | undefined;
    onCanPlayCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onCanPlayThrough?: ReactEventHandler<HTMLSpanElement> | undefined;
    onCanPlayThroughCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onDurationChange?: ReactEventHandler<HTMLSpanElement> | undefined;
    onDurationChangeCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onEmptied?: ReactEventHandler<HTMLSpanElement> | undefined;
    onEmptiedCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onEncrypted?: ReactEventHandler<HTMLSpanElement> | undefined;
    onEncryptedCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onEnded?: ReactEventHandler<HTMLSpanElement> | undefined;
    onEndedCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onLoadedData?: ReactEventHandler<HTMLSpanElement> | undefined;
    onLoadedDataCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onLoadedMetadata?: ReactEventHandler<HTMLSpanElement> | undefined;
    onLoadedMetadataCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onLoadStart?: ReactEventHandler<HTMLSpanElement> | undefined;
    onLoadStartCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onPause?: ReactEventHandler<HTMLSpanElement> | undefined;
    onPauseCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onPlay?: ReactEventHandler<HTMLSpanElement> | undefined;
    onPlayCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onPlaying?: ReactEventHandler<HTMLSpanElement> | undefined;
    onPlayingCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onProgress?: ReactEventHandler<HTMLSpanElement> | undefined;
    onProgressCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onRateChange?: ReactEventHandler<HTMLSpanElement> | undefined;
    onRateChangeCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onResize?: ReactEventHandler<HTMLSpanElement> | undefined;
    onResizeCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onSeeked?: ReactEventHandler<HTMLSpanElement> | undefined;
    onSeekedCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onSeeking?: ReactEventHandler<HTMLSpanElement> | undefined;
    onSeekingCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onStalled?: ReactEventHandler<HTMLSpanElement> | undefined;
    onStalledCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onSuspend?: ReactEventHandler<HTMLSpanElement> | undefined;
    onSuspendCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onTimeUpdate?: ReactEventHandler<HTMLSpanElement> | undefined;
    onTimeUpdateCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onVolumeChange?: ReactEventHandler<HTMLSpanElement> | undefined;
    onVolumeChangeCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onWaiting?: ReactEventHandler<HTMLSpanElement> | undefined;
    onWaitingCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onAuxClick?: MouseEventHandler<HTMLSpanElement> | undefined;
    onAuxClickCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
    onClickCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLSpanElement> | undefined;
    onContextMenuCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onDoubleClick?: MouseEventHandler<HTMLSpanElement> | undefined;
    onDoubleClickCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onDrag?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragEnd?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragEndCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragEnter?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragEnterCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragExit?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragExitCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragLeave?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragLeaveCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragOver?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragOverCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragStart?: DragEventHandler<HTMLSpanElement> | undefined;
    onDragStartCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onDrop?: DragEventHandler<HTMLSpanElement> | undefined;
    onDropCapture?: DragEventHandler<HTMLSpanElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseDownCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseEnter?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseMove?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseMoveCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseOut?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseOutCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseOver?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseOverCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseUp?: MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseUpCapture?: MouseEventHandler<HTMLSpanElement> | undefined;
    onSelect?: ReactEventHandler<HTMLSpanElement> | undefined;
    onSelectCapture?: ReactEventHandler<HTMLSpanElement> | undefined;
    onTouchCancel?: TouchEventHandler<HTMLSpanElement> | undefined;
    onTouchCancelCapture?: TouchEventHandler<HTMLSpanElement> | undefined;
    onTouchEnd?: TouchEventHandler<HTMLSpanElement> | undefined;
    onTouchEndCapture?: TouchEventHandler<HTMLSpanElement> | undefined;
    onTouchMove?: TouchEventHandler<HTMLSpanElement> | undefined;
    onTouchMoveCapture?: TouchEventHandler<HTMLSpanElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLSpanElement> | undefined;
    onTouchStartCapture?: TouchEventHandler<HTMLSpanElement> | undefined;
    onPointerDown?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerDownCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerMove?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerMoveCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerUp?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerUpCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerCancel?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerCancelCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerEnter?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerEnterCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerLeave?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerOver?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerOverCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerOut?: PointerEventHandler<HTMLSpanElement> | undefined;
    onPointerOutCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onGotPointerCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onLostPointerCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<HTMLSpanElement> | undefined;
    onScroll?: UIEventHandler<HTMLSpanElement> | undefined;
    onScrollCapture?: UIEventHandler<HTMLSpanElement> | undefined;
    onWheel?: WheelEventHandler<HTMLSpanElement> | undefined;
    onWheelCapture?: WheelEventHandler<HTMLSpanElement> | undefined;
    onAnimationStart?: AnimationEventHandler<HTMLSpanElement> | undefined;
    onAnimationStartCapture?: AnimationEventHandler<HTMLSpanElement> | undefined;
    onAnimationEnd?: AnimationEventHandler<HTMLSpanElement> | undefined;
    onAnimationEndCapture?: AnimationEventHandler<HTMLSpanElement> | undefined;
    onAnimationIteration?: AnimationEventHandler<HTMLSpanElement> | undefined;
    onAnimationIterationCapture?: AnimationEventHandler<HTMLSpanElement> | undefined;
    onTransitionEnd?: TransitionEventHandler<HTMLSpanElement> | undefined;
    onTransitionEndCapture?: TransitionEventHandler<HTMLSpanElement> | undefined;
}>;

export declare const Select: ForwardRefExoticComponent<Omit<SelectProps, "ref"> & RefAttributes<HTMLSelectElement>>;

export declare const SelectListbox: FunctionComponent<SelectListboxProps>;

declare type SelectListboxProps<TMultiselect = boolean> = TMultiselect extends true ? {
    value: string[] | null;
    isMultiselect?: true;
    onChangeCallback: (value: string[] | null) => void;
    options: ListboxOption[];
    isDisabled?: boolean;
    placeholder?: string;
    labelledById?: string;
    /**
     * @deprecated No longer used
     */
    namespace?: string;
    maxWidth?: string;
    width?: string;
    className?: string;
    id?: string;
} : {
    value: string | null;
    isMultiselect?: false;
    onChangeCallback: (value: string | null) => void;
    options: ListboxOption[];
    isDisabled?: boolean;
    placeholder?: string;
    labelledById?: string;
    /**
     * @deprecated No longer used
     */
    namespace?: string;
    maxWidth?: string;
    width?: string;
    className?: string;
    id?: string;
};

declare interface SelectProps extends HTMLProps<HTMLSelectElement> {
    options: Option_2[];
    emptyOption?: Option_2;
}

declare interface ShareButtonProps {
    url: string;
    title?: string;
    className?: string;
    showText?: boolean;
    disabled?: boolean;
    disabledStyle?: CSSProperties;
    windowWidth?: number;
    windowHeight?: number;
    beforeOnClick?: () => void | Promise<void>;
    openShareDialogOnClick?: boolean;
    onShareWindowClose?: () => void;
    resetButtonStyle?: boolean;
}

export declare const SimpleTable: FunctionComponent<SimpleTableProps>;

declare interface SimpleTableProps {
    simpleTable: SimpleTableRow[];
}

declare interface SimpleTableRow {
    rowColor: Styled_2.SimpleTableColor;
    rowTitle: string;
    rowContent: string;
}

declare interface SimpleValue {
    $value?: number;
}

export declare const SlideoutMenu: FunctionComponent<PropsWithChildren<SlideoutMenuProps>>;

declare interface SlideoutMenuProps {
    title: string;
    callToAction: string;
    id: string;
    isOpen: boolean;
    isSubMenuOpen?: boolean;
    onOpenCallback?: () => void;
    onCloseCallback?: () => void;
}

declare type SpacingSize = "large" | "medium" | "small";

declare namespace Styled {
        {
        LoaderSpeed,
        speeds,
        LoaderContainer
    }
}

declare namespace Styled_2 {
        {
        SimpleTableColor,
        List,
        Title,
        Description
    }
}

declare namespace Styled_3 {
        {
        ContainerWidth,
        Section,
        Inner
    }
}

declare namespace Styled_4 {
        {
        GridProps_2 as GridProps,
        Grid_2 as Grid
    }
}

declare interface SVGProps {
    className?: string;
    size?: string | number;
    stroke?: string;
    fill?: string;
    svgProps?: object;
}

declare type SwatchSize = "small" | "normal" | "large";

export declare const Switch: ForwardRefExoticComponent<Omit<HTMLProps<HTMLButtonElement>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const Toast: FunctionComponent<PropsWithChildren<ToastProps>>;

declare interface ToastProps {
    className?: string;
    /** list of ID's that contributed to this status message eg. if clicking on \<svg id="mySvg"/> created a message, pass ['mySvg'] */
    forIds?: string[];
}

export declare function token(which: string): string;

export declare function token(which: string[]): {
    [key: string]: string;
};

export declare const tokens: {
    [key: string]: string;
};

export declare const TwitterButton: FunctionComponent<ShareButtonProps>;

export declare const Video: FunctionComponent<YouTubePlayerProps>;

export { }

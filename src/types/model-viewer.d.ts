import type { ModelViewerElement } from "@google/model-viewer";

/** @see https://modelviewer.dev/docs/index.html */
declare module "@google/model-viewer" {
  /** @see https://modelviewer.dev/docs/index.html#loading-attributes */
  export type LoadingAttributes = {
    /**
     * The URL to the 3D model. Only glTF/GLB models are supported.
     */
    src?: string;
    /**
     * Configures the model with custom text that will be used to describe the model to viewers who use a screen reader or otherwise
     * depend on additional semantic context to understand what they are viewing.
     */
    alt?: string;
    /**
     * Displays an image instead of the model, useful for showing the user something before a model is loaded and ready to render.
     * If you use a poster with transparency, you may also want to set --poster-color to transparent so that the background shows through.
     */
    poster?: string; // Display an image before model finished loading
    /**
     * An enumerable attribute describing under what conditions the model should be preloaded. The supported values are "auto", "lazy" and "eager". Auto is equivalent to lazy, which loads the model
     * when it is near the viewport for reveal="auto", and when interacted with for reveal="interaction". Eager loads the model immediately.
     * @default 'auto'
     */
    loading?: "auto" | "lazy" | "eager";
    /**
     * This attribute controls when the model should be revealed. It currently supports three values: "auto", "interaction", and "manual".
     * If reveal is set to "interaction", <model-viewer> will wait until the user interacts with the poster before loading and revealing the model.
     * If reveal is set to "auto", the model will be revealed as soon as it is done loading and rendering. If reveal is set to "manual",
     * the model will remain hidden until dismissPoster() is called.
     * @default 'auto'
     *
     * @example: https://modelviewer.dev/examples/loading#preload
     */
    reveal?: "auto" | "interaction" | "manual"; // Controls when the model should be revealed
    /**
     * This attribute makes the browser include credentials (cookies, authorization headers or TLS client certificates) in the request to fetch the 3D model. It's useful if the 3D model file is stored on another server that require authentication. By default the file will be fetch without credentials. Note that this has no effect if you are loading files locally or from the same domain.
     */
    "with-credentials"?: boolean;
  };

  /** @see https://modelviewer.dev/docs/index.html#augmentedreality-attributes */
  export type ARAttributes = {
    /**
     * Enable the ability to launch AR experiences on supported devices.
     */
    ar?: boolean;
    /**
     * A prioritized list of the types of AR experiences to enable. Allowed values are "webxr", to launch the AR experience in the browser, "scene-viewer", to launch the Scene Viewer app, "quick-look", to launch the iOS Quick Look app. You can specify any number of modes separated by whitespace. Including quick-look here without an ios-src (our default) will generate a USDZ on the fly rather than downloading a separate ios-src file.
     */
    "ar-modes"?:
      | "webxr"
      | "scene-viewer"
      | "quick-look"
      | "webxr scene-viewer"
      | "webxr quick-look"
      | "scene-viewer quick-look"
      | "webxr scene-viewer quick-look";
    /**
     * Controls the scaling behavior in AR mode. Set to "fixed" to disable scaling of the model, which sets it to always be at 100% scale. Defaults to "auto" which allows the model to be resized by pinch.
     */
    "ar-scale"?: "auto" | "fixed";
    /**
     * Selects whether to place the object on the floor (horizontal surface) or a wall (vertical surface) in AR. The back (negative Z) of the object's bounding box will be placed against the wall and the shadow will be put on this surface as well. Note that the different AR modes handle the placement UX differently.
     */
    "ar-placement"?: "floor" | "wall";
    /**
     * The url to a USDZ model which will be used on supported iOS 12+ devices via AR Quick Look on Safari. The presence of this attribute will automatically enable the quick-look ar-mode, however it is no longer necessary. If instead the quick-look ar-mode is specified and ios-src is not specified (the default), then we will generate a USDZ on the fly when the AR button is pressed. This means modifications via the scene-graph API will now be reflected in Quick Look. However, USDZ generation is not perfect, for instance animations are not yet supported, so in some cases supplying ios-src may give better results.
     */
    "ios-src"?: string;
    /**
     * Enables AR lighting estimation in WebXR mode; this has a performance cost and replaces the lighting selected with environment-image during an AR session. Known issues: sometimes too dark, sudden updates, shiny materials look matte.
     */
    "xr-environment"?: boolean;
  };

  /** https://modelviewer.dev/docs/index.html#stagingandcameras-attributes */
  export type CameraAttributes = {
    /**
     * Enables controls via mouse/touch. This attribute should nearly always be specified, unless all model motion is being controlled by JavaScript functions.
     */
    "camera-controls"?: boolean;
    /**
     * Disables panning interactions, which are enabled by default using two-finger touch, or dragging with right-click or modifier keys.
     */
    "disable-pan"?: boolean;
    /**
     * Disables tap-to-recenter behavior (both center-the-tapped-point and reset-view-when-tapping-outside). This attribute has no effect in combination with 'disable-pan', as the tap-to-recenter behavior is part of the panning interactions. It is recommended to create custom re-centering behavior when using 'disable-tap' as after panning and rotating, it is effectively impossible for the user to exactly return to their starting view.
     */
    "disable-tap"?: boolean;
    /**
     * Akin to the CSS touch-action property (which does not work due to some iOS bugs), the default 'pan-y' allows touch users to vertically scroll the <model-viewer> element, but can interact if their gesture starts horizontal. Legacy behavior can be achieved with 'none', where all scrolling is prevented, while 'pan-x' is the opposite of 'pan-y'. The normal CSS default 'auto' is not allowed here, as this can be achieved by not including the camera-controls attribute.
     */
    "touch-action"?: "pan-x" | "pan-y" | "none";
    /**
     * Disables user zoom when camera-controls is enabled (has no effect otherwise). Has the secondary effect of not swallowing mouse wheel events and pinch gestures, so these will then scroll and zoom the page, respectively.
     */
    "disable-zoom"?: boolean;
    /**
     * Adjusts the speed of theta and phi orbit interactions. Can also be set negative to reverse, which is helpful when using zero radius to look around the inside of a cave-like model.
     */
    "orbit-speed"?: number;
    /**
     * Enables the auto-rotation of the model.
     */
    "auto-rotate"?: boolean;
    /**
     * Sets the delay before auto-rotation begins. The format of the value is a number in milliseconds.
     */
    "auto-rotate-delay"?: number;
    /**
     * Sets the speed of auto-rotate, when enabled. Accepts values with units in degrees or radians (e.g., "30deg" or "0.5rad"), as well as percent (e.g. "-100%") of the default value of pi/32 radians.
     */
    "rotation-per-second"?: string;
    /**
     * Allows you to disable the visual and audible interaction prompt. If set to "auto", the interaction prompt will be displayed as soon as the interaction-prompt-threshold (see below) time has elapsed (after the model is revealed). The interaction prompt will only display if camera-controls are enabled.
     */
    "interaction-prompt"?: "auto" | "none";
    /**
     * Configures the presentation style of the interaction-prompt when it is raised. When set to "wiggle", the prompt will animate horizontally and the model will rotate as though the prompt is interacting with it. When set to "basic", the prompt is not animated, and instead simply appears until it is dismissed by user interaction.
     */
    "interaction-prompt-style"?: "basic" | "wiggle";
    /**
     * When camera-controls are enabled, <model-viewer> will prompt the user visually (and audibly, for screen readers) to interact if they focus it but don't interact with it for some time. This attribute allows you to set how long <model-viewer> should wait (in milliseconds) before prompting to interact. Defaults to 3000.
     */
    "interaction-prompt-threshold"?: number;
    /**
     * Set the starting and/or subsequent orbital position of the camera. You can control the azimuthal, theta, and polar, phi, angles (phi is measured down from the top), and the radius from the center of the model. Accepts values of the form "$theta $phi $radius", like "10deg 75deg 1.5m". Also supports units in radians ("rad") for angles and centimeters ("cm") or millimeters ("mm") for camera distance. Camera distance can also be set as a percentage ('%'), where 100% gives the model tight framing within any window based on all possible theta and phi values. Any time this value changes from its initially configured value, the camera will interpolate from its current position to the new value. Any value set to 'auto' will revert to the default. For camera-orbit, camera-target and field-of-view, parts of the property value can be configured with CSS-like functions. The CSS calc() function is supported for these values, as well as a specialized form of the env() function. You can use env(window-scroll-y) anywhere in the expression to get a number from 0-1 that corresponds to the current top-level scroll position of the current frame. For example, a value like "calc(30deg - env(window-scroll-y) * 60deg) 75deg 1.5m" cause the camera to orbit horizontally around the model as the user scrolls down the page.
     */
    "camera-orbit"?: string;
    /**
     * Set the starting and/or subsequent point the camera orbits around. Accepts values of the form "$X $Y $Z", like "0m 1.5m -0.5m". Also supports units in centimeters ("cm") or millimeters ("mm"). A special value "auto" can be used, which sets the target to the center of the model's bounding box in that dimension. Any time this value changes from its initially configured value, the camera will interpolate from its current position to the new value.
     */
    "camera-target"?: string;
    /**
     * Used to configure the vertical field of view of the camera. Accepts values in both degrees and radians (e.g., "30deg" or "0.5rad"). Accepts any value between the configured min and max field of view. Any time this value changes from its initially configured value, the camera will interpolate from its current value to the new value. Defaults to "auto", which sets either the vertical or horizontal field of view to 45 degrees depending on the dimensions of the model and the aspect ratio of the canvas.
     */
    "field-of-view"?: string;
    /**
     * Set the maximum orbital values of the camera. Takes values in the same form as camera-orbit, but does not support env(). Note "Infinity" is not an accepted keyword, but the default can still be obtained by passing "auto". The radius value for "auto" is the same as the camera-orbit radius "auto" value.
     */
    "max-camera-orbit"?: string;
    /**
     * Set the minimum orbital values of the camera. Note "Infinity" is not an accepted keyword, but the default can still be obtained by passing "auto". The radius value for "auto" is a conservative value to ensure the camera never enters the model, so be careful when setting this to another value.
     */
    "min-camera-orbit"?: string;
    /**
     * Set the maximum field of view of the camera, corresponding to maximum zoom-out. Takes values in the same form as field-of-view, but does not support env(). The default "auto" is the same as the default field-of-view.
     */
    "max-field-of-view"?: string;
    /**
     * Set the minimum field of view of the camera, corresponding to maximum zoom-in. Takes values in the same form as field-of-view, but does not support env(). Set this to a small value to get close zoom-in without the camera entering the model.
     */
    "min-field-of-view"?: string;
    /**
     * Controls the rate of interpolation when the camera or model moves, due to either user interaction or attribute changes. The decay is asymptotic and the value is in milliseconds, where the majority of the movement will occur within this value's time. Doubling this value will cut the speed in half.
     */
    "interpolation-decay"?: number;
  };

  /** @see https://modelviewer.dev/docs/index.html#lightingandenv-attributes */
  export type LightingAttributes = {
    /**
     * Sets the background image of the scene. Takes a URL to an equirectangular projection image that's used for the skybox, as well as applied as an environment map on the model. Supports png, jpg and hdr (recommended) images.
     */
    "skybox-image"?: string;
    /**
     * Causes the skybox to be projected onto the ground plane. The height indicates the camera's distance above the ground and acts to scale the image at ground level to the correct size. Accepts units in meters ("m"), centimeters ("cm"), or millimeters ("mm"). The default value of 0m disables ground projection.
     */
    "skybox-height"?: string;
    /**
     * Controls the environmental reflection of the model. Normally if skybox-image is set, that image will also be used for the environment-image. Use environment-image to only set the reflection without affecting the background. If neither is specified, default neutral lighting will be applied. If 'legacy' is specified without a skybox, then our old default environment is applied instead.
     */
    "environment-image"?: "neutral" | "legacy" | string;
    /**
     * Controls the exposure of both the model and skybox, for use primarily with HDR environments.
     */
    exposure?: number;
    /**
     * Selects the function that compresses the HDR rendering to an SDR image on your screen. ACES is a film industry standard that is commonly used, though it has serious color-accuracy problems. AgX is a new and improved tone mapper seeing broad adoption in film and games.Commerce is a function designed specifically for accurate color reproduction in e-commerce. Our current default is and has been ACES, but in v4.0 this default will change to Commerce.
     */
    "tone-mapping"?: "aces" | "agx" | "commerce" | string;
    /**
     * Controls the opacity of the shadow. Set to 0 to turn off the shadow entirely.
     */
    "shadow-intensity"?: number;
    /**
     * Controls the blurriness of the shadow. Set to 0 for hard shadows. Softness should not be changed every frame as it incurs a performance cost. Softer shadows render faster.
     */
    "shadow-softness"?: number;
  };

  /** @see https://modelviewer.dev/docs/index.html#animation-attributes */
  export type AnimationAttributes = {
    /**
     * Selects an animation to play by name. This animation will play when the .play() method is invoked, or when the <model-viewer> is configured to autoplay. If no animation-name is specified, <model-viewer> always picks the first animation it finds in the model.
     */
    "animation-name"?: string;
    /**
     * When the current animation is changed, <model-viewer> automatically crossfades between the previous and next animations. This attribute controls how long the crossfade is in milliseconds.
     */
    "animation-crossfade-duration"?: number;
    /**
     * If this is true and a model has animations, an animation will automatically begin to play when this attribute is set (or when the property is set to true). If no animation-name is specified, plays the first animation.
     */
    autoplay?: boolean;
  };

  /** @see https://modelviewer.dev/docs/index.html#scenegraph-attributes */
  export type SceneAttributes = {
    /**
     * Selects a model variant by name.
     */
    "variant-name"?: string;
    /**
     * Rotates the model to the orientation specified by roll, pitch, yaw Euler angles, where yaw is first applied about the Y-axis, then pitch about the new local X-axis (positive is front-down), then roll about the new local Z-axis. If specified before the model loads, automatic camera framing will take this change into account; otherwise the updateFraming() method must be called manually.
     */
    orientation?: string;
    /**
     * Scales the model as specified in the X, Y, and Z directions. Scale is applied before orientation. If specified before the model loads, automatic camera framing will take this change into account; otherwise the updateFraming() method must be called manually.
     */
    scale?: string;
  };

  /**
   * @prop minimumRenderScale This static, writable property sets <model-viewer>'s minimum rendering scale factor as it dynamically changes resolution to maintain framerate. Monitor its behavior with the render-scale event. Turn off this effect by setting to 1.
   * @prop modelCacheSize This static, writable property sets <model-viewer>'s internal glTF model cache size, controlling number of individual models that should be cached. Note that any number of models may be cached at a given time. This number sets the maximum number of models that can be cached even if they are not being used by a <model-viewer> element in the document. Note also that the cache size is measured in number of glTF models, not bytes! This is important to keep in mind, since any two models may have wildly different byte sizes.
   */
  type StaticAttributes = Partial<
    Pick<typeof ModelViewerElement, "minimumRenderScale" | "modelCacheSize">
  >;

  export type ModelViewerAttributes = LoadingAttributes &
    ARAttributes &
    CameraAttributes &
    LightingAttributes &
    AnimationAttributes &
    StaticAttributes;

  export type ImageType = "image/png" | "image/jpeg" | "image/webp";
}

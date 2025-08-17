import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { createCurvedScreen, createVideoGuide } from '@m1d/dcl-components'

export async function main() {
  // --- Create a Video Guide ---
  // This function initializes a video guide. It creates a video texture that
  // can be applied to any material in your Decentraland scene. While this
  // starter scene uses a blank local video source, you can easily replace it
  // with your own video by providing a URL or a local file path.
  const videoGuide = await createVideoGuide({
    localVideo: {
      src: '' // You can replace this with a path to a local video file e.g., 'videos/my-video.mp4'
      ,
      id: '' // A unique identifier for your video
    }
    // To use a video from a URL, you could format it like this:
    // remoteVideo: {
    //   src: 'https://example.com/my-video.mp4',
    //   id: 'remote-video-id'
    // }
  })

  // --- Create the Curved Screen ---
  // This is the core component of the scene. The `createCurvedScreen` function
  // generates a curved mesh and applies the video texture created by the video guide.
  createCurvedScreen({
    // `position` determines where the center of the screen is located in the scene.
    // It's defined by a Vector3 with x, y, and z coordinates.
    position: Vector3.create(0.95, 2.65, 8),

    // `rotation` sets the orientation of the screen. We use a Quaternion here,
    // which is being created from Euler angles (degrees) for easier understanding.
    // This example rotates the screen 90 degrees on the Y-axis.
    rotation: Quaternion.fromEulerDegrees(0, 90, 0),

    // `scale` adjusts the size of the screen. You can make it larger or smaller
    // by changing the x, y, and z values of this Vector3.
    scale: Vector3.create(0.5, 0.5, 1),

    // `videoTexture` applies the video we created earlier to the surface of this screen.
    videoTexture: videoGuide.videoTexture,

    // `curveFactor` is the key property for controlling the screen's curvature.
    // A value of 0 will make the screen completely flat.
    // Increasing the value will increase the bend of the screen.
    // Feel free to experiment with this value to see the live changes!
    curveFactor: 0.3
  })

  // --- Optional: Add a Ground Plane ---
  // To give the scene some context, a ground plane is added.
  // This is purely for visual reference so the screen isn't floating in an empty void.
  // This part is not essential for the curved screen to work and can be removed
  // if you are integrating the screen into an existing scene.
  const ground = engine.addEntity()
  GltfContainer.create(ground, { src: 'models/ground1Parcel.glb' })
  Transform.create(ground)
}
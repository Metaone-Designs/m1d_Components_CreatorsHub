# M1D Curved Screen Starter Scene

Welcome to the M1D Curved Screen Starter Scene for Decentraland! This project is designed to be a simple, plug-and-play example of how to use the `@m1d/dcl-components` library to add a dynamic, curved video screen to your own creations.

This scene is perfect for anyone looking to build immersive media experiences, virtual cinemas, or creative hubs.

## Integration with the M1D Creators Hub

This starter scene serves as the foundational template for the "Curved Screen" asset within the M1D Creators Hub. By providing this as a base, we allow users in the Hub to quickly integrate and customize a sophisticated video screen for their own projects. You can use this repository to understand the underlying code, and use the Creators Hub to deploy and manage it in your own scenes seamlessly.

## Getting Started

Follow these steps to get the scene running on your local machine for testing and development.

### Step 1: Copy the GitHub Repository URL

First, you'll need the URL of the repository to clone it.

1.  Navigate to the main page of the GitHub repository: [https://github.com/MetaOne-Designs/m1d_components_creatorsHub](https://github.com/MetaOne-Designs/m1d_components_creatorsHub)
2.  Click the green **`< > Code`** button.
3.  In the dropdown that appears, make sure **HTTPS** is selected, and click the **copy icon** next to the URL to copy it to your clipboard.



### Step 2: Clone the Repository in GitHub Desktop

Now you can clone the repository to your local machine using GitHub Desktop.

1.  Open the GitHub Desktop application.
2.  Go to the top menu and click **File** > **Clone Repository**.
3.  In the "Clone a repository" window, select the **URL** tab.
4.  Paste the URL you copied from GitHub into the "Repository URL or GitHub CLI command" field.
5.  Choose a local path on your computer where you want to save the project files.
6.  Click the **Clone** button.

The project files will now be downloaded to the selected folder on your computer.

### Step 3: Install Dependencies and Run the Scene

Once the repository is cloned, you need to install the necessary packages and start the local development server.

1.  Open the project folder in your preferred code editor (like VS Code).
2.  Open a terminal window within the editor.
3.  In the terminal, run the following command to install the project dependencies:
    ```bash
    npm install
    ```
4.  After the installation is complete, run this command to start the scene:
    ```bash
    npm run start
    ```

This will launch the Decentraland development server, and you can see the scene running in your web browser, typically at `http://127.0.0.1:8000`.

## Scene Overview

This scene is built around two key functions from the `@m1d/dcl-components` library.

### `createVideoGuide`

This function sets up the video source. It creates a video texture that can be applied to any material in your scene. You can easily modify it to use a video from a URL or a local file included in your project.

### `createCurvedScreen`

This is the main event! This function generates a curved 3D model and applies the video texture to it. The most important parameter to play with is **`curveFactor`**. By adjusting this single value in the `src/index.ts` file, you can instantly change the curvature of the screen from completely flat to a deep curve.

### Ground Plane

The scene also includes an optional ground model. This is purely for visual context to help you see the screen's position within the 3D space. You can safely remove it if you are adding the curved screen to your own environment.

## Customization

We encourage you to open the `src/index.ts` file and experiment!

* **Change the `curveFactor`**: See how it affects the look of the screen.
* **Adjust the `position`, `rotation`, and `scale`**: Move the screen around and resize it to fit your needs.
* **Use your own video**: Modify the `createVideoGuide` function to link to your own video files.

This starter scene is your launchpad. Have fun creating!
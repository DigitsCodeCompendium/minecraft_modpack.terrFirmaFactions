We use packwiz to manage the modpack, check it out here https://packwiz.infra.link/tutorials/creating/getting-started/.
Packwiz lets us easily create configurations for multimc based packs.
I specifically use prism and serve the pack via packwiz's serve system with the modpack boostraper.
See: https://packwiz.infra.link/tutorials/installing/packwiz-installer/

The idea will be to setup continious integration by linking the server to the main branch,
allowing for continous integration of new updates without having to touch the server.
I am hoping to get modpack releases setup this way as well (automatically publish new versions
of the pack when prs to main are accepted)

The repo will be setup with feature/bug fix, develop, staging, and main branch. Main will act
as a release branch where we put "prod" code. Staging is for preparing releases to main. Develop
is for merging your every day features and bug branches. Which are pretty self explanitory.

If you would like to contribute please fork the project and create feature/bug fix branches with
the following names
    features: "feature/<feature name>"
    bugs:     "bug/<bug name>"
Just because you make a feature or a bugfix, does not garantee it will be merged into the pack.
It is a good idea to talk to binaryclock03 before working on a feature to get an idea of if it
might be included or not.
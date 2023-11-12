---
title: "Getting Started"
description: "Getting all the prerequisite tools and software needed to get the project going."
---

The qSelf project is made up of a number of inter-connected components:

* **Logical components:** These are responsible for the logical progression of flows, moving data from screens and sensors to the database and further on to displays.
* **Sensory components:** These components collect external data from various sensors (mostly from the smartwatch).
* **Input and Display components:** These are responsible for receiving manually inputted data that supplements sensory data. The display components display the processed data on dashboards and reports.
* **Analytical components:** These components take the received data and parse it into useful information.
* **Storage and Sync components:** These components take data and store it in the SQLCipher database or in temp files for quick retrieval.

Components are immutable, but the tools that make them work are replaceable and interchangeable.

## Topology

## Toolset
The current toolset consists of the following. Each tool needs to be installed and you need to have a working knowledge of how to use them.

| Component | Tool | Device |  Description | Install | Learn |
| --- | --- | :---: | --- | --- | --- |
| Logical | Python | :material-laptop: | Python is a general purpose language used for data analysis and various scripts. | [Python](https://www.python.org/) |  [TreeHouse](https://teamtreehouse.com/tracks/beginning-python) |
| | Automate | :material-cellphone: | Automate is a graphical code tool to create and manage logic on the mobile device. For this project is requires these Tasker plugins: [AutoWear, AutoInput](https://joaoapps.com/), [Termux:Tasker](https://github.com/termux/termux-tasker), [Sleep as Android](https://docs.sleep.urbandroid.org/services/tasker_automate.html),  and [Kustom](https://docs.kustom.rocks/) (the last two come with their respective apps). | [Google Play](https://play.google.com/store/apps/details?id=com.llamalab.automate) | [LlamaLab](https://llamalab.com/automate/doc/index.html) |
| Sensory | wearOS device | :material-watch:  | Any wearOS compatible smartwatch. The TicWatch Pro 5 is recommended for its battery life and general ease of use. It can also be rooted quite easily, unlike Samsung devices. | [TicWatch](https://www.mobvoi.com/us/pages/ticwatchpro5) | |
| | Android smartphone | :material-cellphone: | The smartphone is a fallback option for certain types of sensory input, such as Steps. The Pixel series is a lean option without the junkware from other Android device manufacturers. You can overlay with Graphene OS to somewhat protect yourself from Google tracking and annoyances. | [Pixel](https://store.google.com/category/phones) | |
| Input and Display | HTML | :material-laptop: | HTML is required foundational knowledge to create web screens to accept manual inputs. | | |
| | CSS | :material-laptop: | CSS is required foundational knowledge to create web screens to accept manual inputs. Better yet, Sass to manage the complexity of some of the input screens. | | |
| | JavaScript | :material-laptop: | JavaScript is required foundational knowledge to create web screens to accept manual inputs. Some JS is also required for using advanced Automate techniques. | | |
| | KLWP | :material-cellphone: | Kustom Live Wallpaper allows you to create interactive home screens and is a pretty powerful logical engine of its own. Most of the data is piped to the home screen dashboard for easy access. | [Google Play](https://play.google.com/store/apps/details?id=org.kustom.wallpaper&hl=en&gl=US) | [Kustom](https://docs.kustom.rocks/) |
| | KWCH | :material-cellphone: :material-watch: | Kustom Watch Face allows you to create watch faces using the Kustom interface. Like KLWP, it is also capable of doing logical operations. | [Google Play](https://play.google.com/store/apps/details?id=org.kustom.watchface&hl=en&gl=US) | [Kustom](https://docs.kustom.rocks/) |
| Analytical | TBA | | | | |
| Storage and Sync | SQLCipher | :material-cellphone: :material-laptop: | SQLCipher is the secure version of SQLite. The commands and queries are largely the same, except for the parts to access the database. | [GitHub](https://github.com/sqlcipher/sqlcipher) | [Zetetic](https://www.zetetic.net/sqlcipher/)  |
| | TablePlus | :material-laptop: | GUI tool for relational databases. In this project used to manually edit the database when things go wrong. Also useful to create queries. | [TablePlus](https://tableplus.com/) | [Docs](https://docs.tableplus.com/) |
| | Termux | :material-cellphone: | Termux is a terminal for Android that allows you to send commands for many popular application. For this project it is used for git commands and a couple of advanced techniques. | [GitHub](https://github.com/termux/termux-app/releases) | [Termux](https://termux.dev/en/) |
| | Syncthing | :material-cellphone: :material-laptop: | Syncthing syncs folders and files across devices. Used to keep the project files updated between the laptop and the smartphone. | [Syncthing](https://syncthing.net/downloads/) | [Docs](https://docs.syncthing.net/) |


---
title: "Getting started"
description: "Getting all the prerequisite tools and software needed to get the project going."
---

The qSelf project is made up of a number of inter-connected components:

* **Logical components:** These are responsible for the logical progression of flows, moving data from screens and sensors to the database and further on to displays.
* **Sensory components:** These components collect external data from various sensors (mostly from the smartwatch).
* **Input and Display components:** These are responsible for receiving manually inputted data that supplements sensory data. The display components display the processed data on dashboards and reports.
* **Analytical components:** These components take the received data and parse it into useful information.
* **Storage and Sync components:** These components take data and store it in the SQLCipher database or in temp files for quick retrieval.

Components are immutable, but the tools that make them work are replaceable and interchangeable.

**Diagram: Topology of the qSelf system**

![The topology of the qSelf system from a wide view.](qs-topology-3333x3333.webp "This is a Title"){width=750}

## Install

### 1. Install all applications and tools
Install all applications in the toolset table. This includes CLI tools that are listed in the Termux row, and plugins for Automate.

### 2. Clone the project repo
Clone the project repo to the root of your user space on your mobile device using Termux and the following commands:

```
cd /storage/emulated/0/
git clone git@github.com:gugulet-hu/qself-process.git
```

### 3. Import flows into Automate and displays into Kustom
Import the `latest.flo` files in each of the directories in the **qself-process/Automate/** folder. Inside Automate, the dot menu in the top-left corner includes the option to **Import**. Import the files in the **qself-process/Kustom/wallpapers/** folder into KLWP and import the files in the **qself-process/Kustom/watchfaces/** folder into KWCH.

### 4. Configure the root settings
Configure the root settings in **qself-process/Automate/.demo-config.json** file and rename the file to **.config.json**.

### 5. Start the [`1 Context`](https://github.com/gugulet-hu/qself-process/tree/main/automate/1%20Context) flow in Automate

## Toolset

| Component | Tool | Device |  Description | Install | Learn |
| --- | --- | :---: | --- | --- | --- |
| Logical | Python | [:material-laptop:](../reference/devices/index.md#laptop) | Python is a general purpose programming language used for data analysis and various scripts. | [Python](https://www.python.org/) |  [TreeHouse](https://teamtreehouse.com/tracks/beginning-python) |
| | Automate | [:material-cellphone:](../reference/devices/index.md#mobile) | Automate is a graphical code tool to create and manage logic on the mobile device. The project also requires these Tasker plugins: [AutoWear, AutoInput](https://joaoapps.com/), [Termux:Tasker](https://github.com/termux/termux-tasker), [Sleep as Android](https://docs.sleep.urbandroid.org/services/tasker_automate.html), and [Kustom](https://docs.kustom.rocks/) (the last two apps come with their respective Automate plugins). | [Google Play](https://play.google.com/store/apps/details?id=com.llamalab.automate) | [LlamaLab](https://llamalab.com/automate/doc/index.html) |
| Sensory | wearOS device | [:material-watch:](../reference/devices/index.md#watch) | Any wearOS compatible smartwatch. The TicWatch Pro 5 is recommended for its battery life and general ease of use. It can also be rooted quite easily, unlike Samsung devices. | [TicWatch](https://www.mobvoi.com/us/pages/ticwatchpro5) | |
| | Android smartphone | [:material-cellphone:](../reference/devices/index.md#mobile) | The smartphone is a fallback option for certain types of sensory input, such as Steps. The Pixel series is a lean option without the junkware from other Android device manufacturers. You can overlay it with [Graphene OS](https://grapheneos.org/) to somewhat protect yourself from Google tracking and annoyances. | [Pixel](https://store.google.com/category/phones) | |
| | Sleep as Android | [:material-cellphone:](../reference/devices/index.md#mobile) [:material-watch:](../reference/devices/index.md#watch) | This app is the most reliable sleep tracker for Android. Make sure to turn off the features that send your data to the developer. It is deeply integrated into the way the sleep track flow works. | [Google Play](https://play.google.com/store/apps/details?id=com.urbandroid.sleep) | [Docs](https://www.docs.sleep.urbandroid.org/services/automation.html) |
| Input and Display | HTML | [:material-laptop:](../reference/devices/index.md#laptop) | HTML is required foundational knowledge to create web screens to accept manual inputs. | | |
| | CSS | [:material-laptop:](../reference/devices/index.md#laptop) | CSS is required foundational knowledge to create web screens to accept manual inputs. Better yet, Sass to manage the complexity of some of the input screens. | | |
| | JavaScript | [:material-laptop:](../reference/devices/index.md#laptop) | JavaScript is required foundational knowledge to create web screens to accept manual inputs. Some JS is also required for using advanced Automate techniques. | | |
| | KLWP | [:material-cellphone:](../reference/devices/index.md#mobile) | Kustom Live Wallpaper allows you to create interactive home screens and is a pretty powerful logical engine of its own. Most of the data is piped to the home screen dashboard for easy access. | [Google Play](https://play.google.com/store/apps/details?id=org.kustom.wallpaper&hl=en&gl=US) | [Kustom](https://docs.kustom.rocks/) |
| | KWCH | [:material-cellphone:](../reference/devices/index.md#mobile) [:material-watch:](../reference/devices/index.md#watch) | Kustom Watch Face allows you to create watch faces using the Kustom interface. Like KLWP, it is also capable of doing logical operations. | [Google Play](https://play.google.com/store/apps/details?id=org.kustom.watchface&hl=en&gl=US) | [Kustom](https://docs.kustom.rocks/) |
| Analytical | TBA | | | | |
| Storage and Sync | SQLCipher | [:material-cellphone:](../reference/devices/index.md#mobile) [:material-laptop:](../reference/devices/index.md#laptop) | SQLCipher is the secure version of SQLite. The commands and queries are largely the same, except for the parts to access the database. | [GitHub](https://github.com/sqlcipher/sqlcipher) | [Zetetic](https://www.zetetic.net/sqlcipher/)  |
| | TablePlus | [:material-laptop:](../reference/devices/index.md#laptop) | GUI tool for relational databases. In this project used to manually edit the database when things go wrong. Also useful to create queries. | [TablePlus](https://tableplus.com/) | [Docs](https://docs.tableplus.com/) |
| | Termux | [:material-cellphone:](../reference/devices/index.md#mobile) | Termux is a terminal for Android that allows you to send commands for many popular application. For this project it is used for git commands and a couple of advanced techniques. The following packages are installed using the `pkg install <package>` command: curl, gh, git, pinentry, python, sqlcipher, termux-api, and termux-tools. | [GitHub](https://github.com/termux/termux-app/releases) | [Termux](https://termux.dev/en/) |
| | iTerm2 | [:material-laptop:](../reference/devices/index.md#laptop) | iTerm is my preferred console for macOS. See the description for Termux for which CLI tools to install using the command `brew install <package>`. [Homebrew](https://brew.sh/) will also need to be installed. | [iTerm](https://iterm2.com/) | [Docs](https://iterm2.com/documentation.html) |
| | Syncthing | [:material-cellphone:](../reference/devices/index.md#mobile) [:material-laptop:](../reference/devices/index.md#laptop) | Syncthing syncs folders and files across devices. Used to keep the project files updated between the laptop and the smartphone. | [Syncthing](https://syncthing.net/downloads/) | [Docs](https://docs.syncthing.net/) |



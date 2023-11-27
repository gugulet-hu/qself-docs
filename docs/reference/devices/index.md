---
title: "Devices"
description: "Some tips and tricks for working with the devices that enable the project." q
tags:
        - Watch
        - Mobile
        - Laptop
---

## :material-cellphone: Mobile

The mobile device used in the qSelf project needs to run the Android operating system; preferably the latest version. Most manufacturers add cruft to their devices, so the Pixel series is recommended for its focus on the pure Android experience. Furthermore, the Graphene-flavoured version of Android gives you more control of your privacy and device use compared to standard Android. The device should be unrooted, but with [Developer options](https://www.howtogeek.com/129728/how-to-enable-developer-options-menu-and-enable-and-usb-debugging-on-android/) enabled. This lets you use the Android Debug Bridge (ADB).

To install Graphene, see their [user guide](https://grapheneos.org/install/) for instructions.

## :material-watch: Watch

Similarly to the mobile device, the smartwatch needs to run wearOS 3+. The TicWatch series of smartwatches has good battery life and a reasonable number of sensors. You may need to disable or remove additional software added by the manufacturer to get better battery life and less interference. The device should be unrooted, but with [Developer options](https://developer.android.com/training/wearables/get-started/debugging) enabled. This lets wirelessly connect using ADB.

The commands that follow can help you debloat your device and make it run smoother.

### Connect to device

Once you enabled ADB via wi-fi and you have the device's address you can connect to the device run the following command from your terminal or console.

=== "Code"

        adb connect <IP-address>
        adb connect <IP-address>:<Port>


=== "Example"
        adb connect 192.168.123.132
        adb connect 192.168.123.132:12345

| Part | Description | Required |
| --- | --- | --- |
| `adb` | The Android Debugging Bridge CLI tool. To install it on Termux, use: `pkg install android-tools`. To install it on macOS, using homebrew: `brew install android-tools`. | Yes |
| `connect` | The command to connect over wi-fi to the device. | Yes |
| `<IP-address>` | You can find the IP address on your device when you turn on ADB over wi-fi. It is usually located in **Settings** > **Developer options** > **Wireless debugging**. The command to connect without the port number may be necessary to prompt the permissions dialog, which confirms that you want to connect to this device on the first attempt. | Yes |
| `<Port>` | The port number can usually be found in **Settings** > **Developer options** > **Wireless debugging**. The port number is required when there is more than one device connected via ADB. | No |

### Grant permissions to apps

To allow autoWear, for example, to change secure settings (such as toggling Theatre Mode) use the following command.

=== "Code"
        adb -s "<IP-address>:<Port>" shell pm grant <package-name> <permission>

=== "Example"
        adb -s "192.168.123.132:12345" shell pm grant com.joaomgcd.autowear android.permission.WRITE_SECURE_SETTINGS

| Part | Description | Required |
| --- | --- | --- |
| `adb` | The Android Debugging Bridge CLI tool. To install it on Termux, use: `pkg install android-tools`. To install it on macOS, using homebrew: `brew install android-tools`. | Yes |
| `-s` | This flag selects a particular device when there is more than one device connected via ADB. | No |
| `<IP-address>` | This IP address can be found in **Settings** > **Developer options** > **Wireless debugging**. The command to connect without the port number may be necessary to prompt the permissions dialog, which confirms that you want to connect to this device on the first connection. | Yes |
| `<Port>` | The port number is in **Settings** > **Developer options** > **Wireless debugging**. The port number is required when there is more than one device connected via ADB. | No |
| `shell` | The shell for interacting with ADB. | Yes |
| `pm` | Short for package manager, which manages apps on an Android or wearOS device. | Yes |
| `grant <package-name> <permission>` | Grant this package these permissions on the device. | Yes |

### List system apps

To list all the manufacturer applications installed.

=== "Code"
        adb -s "<IP-address>:<Port>" shell pm list packages -s -e <manufacturer-name>

=== "Example"
        adb -s "192.168.123.132:12345" shell pm list packages -s -e mobvoi

| Part | Description | Required |
| --- | --- | --- |
| `adb` | The Android Debugging Bridge CLI tool. To install it on Termux, use: `pkg install android-tools`. To install it on macOS, using homebrew: `brew install android-tools`. | Yes |
| `-s` | This flag selects a particular device when there is more than one device connected via ADB. | No |
| `<IP-address>` | This IP address can be found in **Settings** > **Developer options** > **Wireless debugging**. The command to connect without the port number may be necessary to prompt the permissions dialog, which confirms that you want to connect to this device on the first attempt. | Yes |
| `<Port>` | The port number is in **Settings** > **Developer options** > **Wireless debugging**. The port number is required when there is more than one device connected via ADB. | No |
| `shell` | The shell for interacting with ADB. | Yes |
| `pm` | Short for package manager, which manages apps on an Android or wearOS device. | Yes |
| `list packages` | List all the packages that meet the conditions that follow. | Yes |
| `-s` | A flag to filter for system apps. | No |
| `-e` | A flag to filter for enabled apps. To filter for disabled apps use `-d`. | No |

### Disable system apps

To disable a manufacturer's app on your device.

=== "Code"
        adb -s "<IP-address>:<Port>" shell pm disable-user --user 0 <package-name>

=== "Example"
        adb -s "192.168.123.132:12345" shell pm disable-user --user 0 com.mobvoi.wear.mcuservice.aw

| Part | Description | Required |
| --- | --- | --- |
| `adb` | The Android Debugging Bridge CLI tool. To install it on Termux, use: `pkg install android-tools`. To install it on macOS, using homebrew: `brew install android-tools`. | Yes |
| `-s` | This flag selects a particular device when there is more than one device connected via ADB. | No |
| `<IP-address>` | This IP address can be found in **Settings** > **Developer options** > **Wireless debugging**. The command to connect without the port number may be necessary to prompt the permissions dialog, which confirms that you want to connect to this device on the first attempt. | Yes |
| `<Port>` | The port number is in **Settings** > **Developer options** > **Wireless debugging**. The port number is required when there is more than one device connected via ADB. | No |
| `shell` | The shell for interacting with ADB. | Yes |
| `pm` | Short for package manager, which manages apps on an Android or wearOS device. | Yes |
| `disable-user --user 0` | Disable the following app on the device. | Yes |
| `<package-name>` | The name of the package to disable. You can find the package names by [listing the packages](#list-system-apps). | Yes |

## :material-laptop: Laptop

Any laptop that can run Python is good enough for this project.

!!! note "Using commands in Powershell"

    Please be aware that some terminal commands in Linux and macOS are different in Windows Powershell. There may be instances where you need to use ticks (`) to escape ceratin characters.










[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-cal-history.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-cal-history) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-cal-history) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

A deep package based on [`@capacitor/cal-history`](https://www.npmjs.com/package/@capacitor/cal-history) 

# Table Of Contents
<!-- TABLE_OF_CONTENTS_START -->
- [Table Of Contents](#table-of-contents)
- [Prerequisitions](#prerequisitions)
- [Quick Start](#quick-start)
- [CalHistory Object Value](#calhistory-object-value)
- [Update Handling](#update-handling)
- [Contribution](#contribution)

<!-- TABLE_OF_CONTENTS_END -->

# Prerequisitions
- Install this package in your deep by using npm-packager
- Provide permissions to this package

# Quick Start

1. Insert a link of type [`CalHistory`] 
2. Change its object value to the object with properties described in [CalHistory Object Value](#cal-history-object-value) and this update will be handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`CalHistory`] object value as links
or  
Insert a link of any type with a any name of the list described in [CalHistory Object Value](#cal-history-object-value) from [`CalHistory`] link to the same [`CalHistory`] link and set its value to the value of the corresponding property of the [`CalHistory`] object value

Note: You can use library of this package to do operations described above. Read about it in [Documentation]

# CalHistory Object Value

The [`CalHistory`] link can have object value.  
No one field is required. You can add any fields as you want.  Only the fields that are supported by this package will be represented as links   
[Supported fields can be found in the `CalHistoryInfo` interface](https://deep-foundation.github.io/capacitor-cal-history/types/CalHistoryInfo.html)  
[Example of CalHistory Object Value](https://deep-foundation.github.io/capacitor-cal-history/types/CalHistoryInfo.html#md:cal-history-info-example)

# Update Handling

[`CalHistory`] updates are handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`CalHistory`] object value as links

# Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.

[`CalHistory`]: https://deep-foundation.github.io/capacitor-cal-history/classes/Package.html#CalHistory
[Documentation]: https://deep-foundation.github.io/capacitor-cal-history/
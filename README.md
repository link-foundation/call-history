[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-call-history.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-call-history) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-call-history) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

A deep package based on [`@capacitor/call-history`](https://www.npmjs.com/package/@capacitor/call-history) 

# Table Of Contents
<!-- TABLE_OF_CONTENTS_START -->
- [Table Of Contents](#table-of-contents)
- [Prerequisitions](#prerequisitions)
- [Quick Start](#quick-start)
- [CallHistory Object Value](#callhistory-object-value)
- [Update Handling](#update-handling)
- [Contribution](#contribution)

<!-- TABLE_OF_CONTENTS_END -->

# Prerequisitions
- Install this package in your deep by using npm-packager
- Provide permissions to this package

# Quick Start

1. Insert a link of type [`CallHistory`] 
2. Change its object value to the object with properties described in [CallHistory Object Value](#call-history-object-value) and this update will be handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`CallHistory`] object value as links
or  
Insert a link of any type with a any name of the list described in [CallHistory Object Value](#call-history-object-value) from [`CallHistory`] link to the same [`CallHistory`] link and set its value to the value of the corresponding property of the [`CallHistory`] object value

Note: You can use library of this package to do operations described above. Read about it in [Documentation]

# CallHistory Object Value

The [`CallHistory`] link can have object value.  
No one field is required. You can add any fields as you want.  Only the fields that are supported by this package will be represented as links   
[Supported fields can be found in the `CallHistoryInfo` interface](https://deep-foundation.github.io/capacitor-call-history/types/CallHistoryInfo.html)  
[Example of CallHistory Object Value](https://deep-foundation.github.io/capacitor-call-history/types/CallHistoryInfo.html#md:call-history-info-example)

# Update Handling

[`CallHistory`] updates are handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/classes/Package.html#UpdateHandler) to represent [`CallHistory`] object value as links

# Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.

[`CallHistory`]: https://deep-foundation.github.io/capacitor-call-history/classes/Package.html#CallHistory
[Documentation]: https://deep-foundation.github.io/capacitor-call-history/
# toggle-menu-package
 
- install the package: `npm install @mitchyugan/toggle-menu`

## use like this:
**index.js:**
```const ToggleMenu = require('toggle-menu')

import './index.css'

const menuToggle = document.querySelector(".buttonClass")
const menu = document.querySelector(".menuClass")

ToggleMenu(menuToggle, menu)
```

**index.css:**
```
.buttonClass{
    cursor: pointer;
}

.menuClass{
    display: none;
}

.menuClass.active{
    display: block;
}
```

### You can use webpack to bundle your codes
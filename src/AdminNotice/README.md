# Admin Notice

WordPress admin notice component.

### Usage

```javascript
import { AdminNotice } from "@adrianoferreira/wp-react-admin";

<AdminNotice dismissible={true} type='error' disappear={true} message="Saved Successfully"/>
```

### Options

| Name | Description | Values |
|---| --- | --- |
|  dismissible | It sets notices as dismissible | true or false |
|  type | The style of the notice | success, warning, info or error |
|  disappear | Temporary admin notice which will automatically disappears after a few seconds | true or false |
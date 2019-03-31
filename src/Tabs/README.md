# Admin Notice

WordPress admin notice component.

### Usage

```javascript
import { Tabs } from "@adrianoferreira/wp-react-admin";

const tabs = [
	{
		name: 'tab-1',
		title: 'Tab 1',
		content: 'Some Content'
	},
	{
  		name: 'tab-2',
  		title: 'Tab 2',
  		content: <MyCustomComponent />
  	}
]

<Tabs tabs={tabs} />
```

### Options

| Name | Description | Values |
|---| --- | --- |
|  tabs | It is a required parameter where you should pass an array of tab objects | array of objects |
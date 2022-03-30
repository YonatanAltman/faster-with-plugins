# Nx Plugins talk March 2022

## Overview
- [ ] what is plugins
- [ ] why use plugins
- [ ] who use plugins
- [ ] when use generator
- [ ] when use executor


## Generator
### Add
`nx generate @nrwl/workspace:workspace-generator $generatorName`

### Adjusting the schema
 ####Parameters
- name*
- location
- isDto

### Schema interface

```json
"x-prompt" : {
        "message": string
        "type": "list", // | "string" | "boolean",
        "items": [
              {
              "value": "string",
              "label": "string"
              }
        ],
        "type": //list | confirmation,

      }
```


#### Add interface:


```typescript
export interface InterfaceGeneratorOptions {
name: string;
location?: 'global' | 'local';
isDto?: boolean;
}
```
### Run
`nx workspace-generator $generatorName $parameterName`

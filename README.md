# recipe-ext-static-theme

Recipe of Sencha static themes

This is a template for the Universal ExtJs application with topic switching.

## Install

```sh
$ git clone https://github.com/VedemV/recipe-ext-static-theme.git
$ sencha -sdk sencha/sdk/ext-6.2.1 generate workspace recipe-ext-static-theme
$ cd recipe-ext-static-theme
$ npm install
$ cd app-themes
$ sencha app build -dev
```

## Usage

- `http://<your_suite>/recipe-ext-static-theme/app-themes/index.html`

    Autodetect of themes. See the `Ext.beforeLoad` in [app-themes/index.html](app-themes/index.html) for details.
    
- `http://<your_suite>/recipe-ext-static-theme/app-themes/index.html?classic`

    Autodetect of themes for classic mode application

- `http://<your_suite>/recipe-ext-static-theme/app-themes/index.html?modern`

    Autodetect of themes for modern mode application

- `http://<your_suite>/recipe-ext-static-theme/app-themes/index.html?profile=neptune`

    Launching the application in the `classic` mode with the theme neptune`

## Available profiles

|Profile name in [builds section](app-themes/app.json)|toolkit|theme| |
|---|---|---|---|
|**classic**|classic|theme-classic| |
|**aria**|classic|theme-aria| |
|**gray**|classic|theme-gray| |
|**neptune**|classic|theme-neptune|default for Desctop|
|**neptune-touch**|classic|theme-neptune-touch| |
|**crisp**|classic|theme-crisp| |
|**crisp-touch**|classic|theme-crisp-touch|default for Tablet|
|**triton**|classic|theme-triton| |
| | | | |
|**modern-neptune**|modern|theme-neptune|default for Android|
|**modern-triton**|modern|theme-triton|default for other phones|
|**modern-material**|modern|theme-material| |
|**ios**|modern|theme-ios|default for iPhone|
|**blackbery**|modern|theme-blackbery| |
|**cupertino**|modern|theme-cupertino| |
|**mountainview**|modern|theme-mountainview| |
|**windows**|modern|theme-windows| |


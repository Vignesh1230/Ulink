# ULINK - OS BIO LINK

Ulink is a simple Bio Link Generator for every social media! Ulink uses JSON to create a epic Bio Link!

# Geting started

| Host             | Result             | Link                                                                                                                           
|------------------|--------------------|-----------------------------------------------------------------------------------------------------------------|
| Replit           | :white_check_mark: | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Benja-media/Ulink) |
| Glitch           | :white_check_mark: | [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/benja-media/Ulink) |
| Cloudflare Pages | :white_check_mark: |   |
| Vercel           | :white_check_mark: | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBenja-media%2FUlink)|
| Heroku           | :x:                | |
| Github pages     | :white_check_mark: | [![forks - instalink](https://img.shields.io/github/forks/benja-media/Ulink?style=social)](https://github.com/Benjamedia/Ulink/network/members)|

To deploy to replit use deploy command `ulink`

# Adding your links

All options are required unless otherwise stated

Here is an example config.json file

**_Link structure has changed!!! Below is the new verion_**

```
{
  "user": "instagrammer",
  "profile": "https://instagram.com/instagrammer",
  "symbol": "@",
  "name": "Instagrammer",
  "photo": "https://cdn.glitch.com/35409746-8e4a-406e-ac47-16c4db92cad8%2F10x100profile.jpeg",
  "display":"instagrammer",

  "body":[
    {"id":"1","title":"Link_1","url":"/link"},
    {"id":"2","title":"Link_2","url":"/link"},
    {"id":"3","title":"Link_3","url":"/link"}
  ]
}
```

## Options

`user` Is your username.

`profile` Is the URL to your chosen profile

`symbol` is the symbol from your name EX: `@benmmonster`

`name` Is your display name

`photo` This is your URL to your avatar! Linking directly to your social media avatar is not supported due to CORS restrictions!

**_Recomeded dimensions is 100x100px!_**

## Types
Ulink now has widgets! The supported types are 

`links` `title` `image`

Type can be set for each element! EX: 
```   
{"type":"link", "title":"LINK 1!","url":"https://example.com"}
```
Values are case sensitive!
### Type: Link

Options: 

`title` Is the display to your link

`url` Is the destination

EX:
```   
{"type":"link", "title":"LINK 1!","url":"https://example.com"}
```
### Type: Image

Options:

`src` The image to display

`url` A link were the image links to: if you do not wish to have the image as a link, use the value `none`

EX:
```
{"type":"image", "src":"https://live.staticflickr.com/65535/52052394106_a32cca4a1e_b.jpg","url":"none"},
```
### Type: Title

Options:

`title` The display of the title

EX:
```
{"type":"title","title":"TITLE"},
```

# Styles

The style readme is located at `/styles/styles.md`

# Icons
Ulink now supports Icons from Font Awesome!

The icon config file is found in `/config/config.json`
## Example Icon set

```
"icons":{
  "size": "fa-2x",
  "space": "fa-fw",
  "color":"#1A4EB4",
  "icons": [
    {
      "fa": "fab fa-github-square",
      "url": "https://github.com/Benja-media"
    },
    {
      "fa": "fab fa-youtube-square",
      "url": "https://youtube.com/channel/UC8g9QqWZYtgfKvuzs22TNqw"
    },
    {
      "fa": "fab fa-flickr",
      "url": "https://www.flickr.com/people/benmmonster/"
    },
    {
      "fa": "fas fa-cube",
      "url": "https://www.thingiverse.com/benjm/"
    },    
    {
      "fa": "fab fa-instagram",
      "url": "https://instagram.com/benmmonster"
    }
  ]
}
```

Options:
`size` The size of the Icon. Reccomended Value is `fa-2x`

`space` The spacing between Icons. Reccomended Value is `fa-fw`

`color` The color of the Icon.

Icons:

`fa` The Font awesome Icon! (The `fa` is required)

`url` Where the icon brings users to

# Extras

**ULINK SVR HAS BEEN DISCONTINUED**

Upload to `/extras` and link to `index.html`

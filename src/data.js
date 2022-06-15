export const input = [
    {
        type: "dir",
        name: "src",
        contents: [
            {
                type: "dir",
                name: "doc",
                contents: [
                    { type: "file", name: "LICENSE.txt" },
                    { type: "file", name: "LICENSE.txt" }
                ]
            },
            {
                type: "dir",
                name: "img",
                contents: [{ type: "file", name: ".gitignore" }]
            },
            {
                type: "dir",
                name: "js",
                contents: [
                    {
                        type: "dir",
                        name: "check",
                        contents: [
                            { type: "file", name: ".gitignore" },
                            { type: "file", name: "main.js" },
                            {
                                type: "dir",
                                name: "main.js",
                                contents: [
                                    {
                                        type: "dir",
                                        name: ".REACTFILE",
                                        contents: [
                                            {
                                                type: "dir",
                                                name: ".redux",
                                                contents: [
                                                    {
                                                        type: "dir",
                                                        name: ".redux",
                                                        contents: [{ type: "file", name: ".redux" }]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { type: "file", name: "main.js" },
                    { type: "file", name: "plugins.js" }
                ]
            },
            { type: "file", name: "404.html" },
            { type: "file", name: "tile.png" }
        ]
    },
    {
        type: "dir",
        name: "test",
        contents: [
            { type: "file", name: "file_content.js" },
            { type: "file", name: "file_existence.js" }
        ]
    },
    { type: "file", name: "CHANGELOG.md" },
    { type: "file", name: "LICENSE.txt" }
];

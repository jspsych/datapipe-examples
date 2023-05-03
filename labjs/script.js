// Define study
const study = lab.util.fromObject({
  "messageHandlers": {},
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "stroop-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Stroop task",
    "description": "An implementation of the classic paradigm introduced by Stroop (1935).",
    "repository": "https:\u002F\u002Fgithub.com\u002FFelixHenninger\u002Flab.js\u002Ftree\u002Fmaster\u002Ftasks",
    "contributors": "Felix Henninger \u003Cmailbox@felixhenninger.com\u003E (http:\u002F\u002Ffelixhenninger.com)"
  },
  "parameters": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "messageHandlers": {},
      "type": "lab.html.Screen",
      "responses": {
        "keypress(Space)": "continue"
      },
      "title": "Instruction",
      "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ch1\u003EDataPipe demo - lab.js\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Cp\u003E\n    This is a demo of using DataPipe to store data from lab.js\n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    The task is a short Stroop task to generate some data that can\n    be saved. There are 9 trials. After completing the task the\n    data will be saved on the OSF.\n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    To indicate the color of the word, \n    please use the keys \u003Cstrong\u003Er\u003C\u002Fstrong\u003E, \n    \u003Cstrong\u003Eg\u003C\u002Fstrong\u003E, and \u003Cstrong\u003Eb\u003C\u002Fstrong\u003E for \n    \u003Cspan style=\"color: red;\"\u003Ered\u003C\u002Fspan\u003E, \n    \u003Cspan style=\"color: green;\"\u003Egreen\u003C\u002Fspan\u003E, and\n    \u003Cspan style=\"color: blue;\"\u003Eblue\u003C\u002Fspan\u003E\n    respectively.\u003Cbr\u003E\n    Please answer quickly, and as \n    accurately as you can.\n  \u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  Please press the space bar when you're ready.\n\u003C\u002Ffooter\u003E\n",
      "parameters": {},
      "files": {}
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green, and \n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E\n",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Task frame",
      "content": {
        "messageHandlers": {},
        "type": "lab.flow.Loop",
        "responses": {
          "": ""
        },
        "templateParameters": [
          {
            "color": "red",
            "word": "red",
            "phase": "task"
          },
          {
            "color": "red",
            "word": "green",
            "phase": "task"
          },
          {
            "color": "red",
            "word": "blue",
            "phase": "task"
          },
          {
            "color": "green",
            "word": "green",
            "phase": "task"
          },
          {
            "color": "green",
            "word": "blue",
            "phase": "task"
          },
          {
            "color": "blue",
            "word": "red",
            "phase": "task"
          },
          {
            "color": "blue",
            "word": "green",
            "phase": "task"
          },
          {
            "color": "blue",
            "word": "blue",
            "phase": "task"
          },
          {
            "color": "green",
            "word": "red",
            "phase": "task"
          }
        ],
        "title": "Stroop task",
        "parameters": {},
        "files": {},
        "sample": {
          "mode": "draw-shuffle"
        },
        "shuffleGroups": [],
        "template": {
          "messageHandlers": {},
          "type": "lab.flow.Sequence",
          "responses": {
            "": ""
          },
          "title": "Trial",
          "parameters": {},
          "files": {},
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 18.69,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "72",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation cross",
              "timeout": "500"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 331.08,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "${ this.parameters.color }",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "72",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "files": {},
              "parameters": {},
              "responses": {
                "keydown(r)": "red",
                "keydown(g)": "green",
                "keydown(b)": "blue",
                "keydown(o)": "orange"
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stroop screen",
              "correctResponse": "${ this.parameters.color }"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [],
              "files": {},
              "parameters": {},
              "responses": {
                "": ""
              },
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Inter-trial interval",
              "timeout": "500"
            }
          ]
        }
      }
    },
    {
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
function randomID(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
    
let dataJSON = study.internals.controller.datastore.exportJson();


fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "G7IZlxzwiEs2",
    filename: `${randomID()}.json`,
    data: dataJSON,
  }),
});
}
      },
      "type": "lab.html.Screen",
      "responses": {
        "": ""
      },
      "title": "Save Data and Thanks",
      "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Cp\u003E\n    The data file should be available at \u003Ca href=\"https:\u002F\u002Fosf.io\u002Fyrjzg\u002F\" target=\"_blank\"\u003Ehttps:\u002F\u002Fosf.io\u002Fyrjzg\u002F\u003C\u002Fa\u003E\n  \u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E\n",
      "timeout": "10",
      "parameters": {},
      "files": {},
      "tardy": true
    }
  ]
})

// Let's go!
study.run()
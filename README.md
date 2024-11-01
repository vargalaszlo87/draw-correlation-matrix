# draw-correlation-matrix

Draw correlation matrix in pure JavaScript. This is an easy way you can show your correlation matrix in a web app.

## 🚀 Features

**`_canvasName_`**
- You can set the proper name of canvas for HTML tag.

**`N`** 
- You can give the size of quadratic-matrix from 3 to n.

**`__labelsVector__`**
- You can give the name vector for "legends".

**`__correlationMatrix__`**
- Here can you push the data in 2D array for showing.

## 🧱 Project structure

```properties
│
|
├── tests/
│   └── draw-correlation-matrix.test.js
|
├── draw-correlation-matrix.js
├── example.html
├── package.json
└── README.md
```

## ✨Getting started / Usage

#### Clone source

```
git clone https://github.com/vargalaszlo87/draw-correlation-matrix.git
```

#### Usage

This solution is simple, you can use it easily.

1. Copy the **draw-correlation.matrix.js** to you directory where you would like use it.
2. Add a **canvas** into your HTML (or other) code.
3. Add **the size of quadratic-matrix**.
4. Add the **labels** vector.
5. Finally, add the 2D **correlation matrix** for the method.

**`example.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draw Correlation Matrix</title>
    <script type="text/javascript" src="draw-correlation-matrix.js"></script>
</head>
<body>
    <canvas id="matrixCanvas"></canvas>
    <script type="text/javascript">
        // add the datas
        const corrMatrix = [
            [1.00,-0.85,-0.78,0.68,-0.87,0.42],
            [-0.85,1.00,0.79,-0.71,0.89,-0.43],
            [-0.78,0.79,1.00,-0.45,0.66,-0.71],
            [0.68,-0.71,-0.45,1.00,-0.71,0.09],
            [-0.87,0.89,0.66,-0.71,1.00,-0.17],
            [0.42,-0.43,-0.71,0.09,-0.17,1.00]
        ];
        const labels = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta"];
        // call the funcion
        drawCorrelationMatrix.chart("matrixCanvas", 6, labels, corrMatrix);
    </script>
</body>
</html>
```


## 👨‍⚖️ License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See `LICENSE.txt` for more information.


## 📬 Contact

Varga Laszlo - https://vargalaszlo.com - mail@vargalaszlo.com.com

Project Link: https://github.com/vargalaszlo87/pid-c

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://vargalaszlo.com)




class Triangle {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  createTriangle() {
    return `
    <svg  xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 100 100">
    <polygon points="50 15, 100 100, 0 100" fill=${this.color}/>
    <text x="50" y="70" fill=${this.textColor} text-anchor="middle" alignment-baseline="central">${this.text}</text>
  </svg>
    `;
  }
}

class Circle {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  createCircle() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="110" cy="100" r="90" fill=${this.color} />
      <text
        x="38%"
        y="50%"
        fill=${this.textColor}
        font-size="50"
        text-anchor="middle"
        alignment-baseline="central"
      >
       ${this.text}
      </text>
    </svg>`;
  }
}

class Square {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
  createSquare() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="200" height="200" fill=${this.color} x="50" y=""/>
    <text x="50%"  y="50%" fill=${this.textColor} font-size="40" text-anchor="middle" alignment-baseline="central">${this.text}</text>
    </svg>

    `;
  }
}

const spiral = (size) => {
  for (var h = 0; h < size; h++) {
    var line = "";
    for (var w = 0; w < size; w++) {
      if (h < size / 2) {
        if (h % 2 === 0) {
          if (w >= h && w < size - h) {
            line += "@";
          } else {
            line += w % 2 === 0 ? "@" : " ";
          }
        } else {
          if (w >= h && w < size - h) {
            line += " ";
          } else {
            line += w % 2 === 0 ? "@" : " ";
          }
        }
      } else {
        if (h % 2 === 0) {
          if (w < h - 1 && w >= size - h) {
            line += "@";
          } else {
            line += w % 2 === 0 ? "@" : " ";
          }
        } else {
          if (w < h - 1 && w >= size - h) {
            line += " ";
          } else {
            line += w % 2 === 0 ? "@" : " ";
          }
        }
      }
    }
    console.log(line);
  }
};

spiral(15);

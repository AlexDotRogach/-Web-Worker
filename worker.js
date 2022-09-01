onmessage = function (e) {
  const arrValue = e.data.split("");
  const regExpr = new RegExp(/\D/);
  let counter = 0;

  arrValue.forEach((item) => {
    regExpr.exec(item) ? ++counter : "";
  });

  this.postMessage(counter);
};

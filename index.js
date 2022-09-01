function mainProcess() {
  const myWorker = new Worker("./worker.js");
  const btnCount = document.querySelector(".count");
  const textArr = document.querySelector("#text");
  const result = document.querySelector(".result");

  btnCount.addEventListener("click", () =>
    workerSumbit(myWorker, textArr.value)
  );

  myWorker.onmessage = function (e) {
    result.textContent = e.data;
  };

  function workerSumbit(worker, value) {
    if (window.Worker) {
      worker.postMessage(value);
    }
  }
}

mainProcess();

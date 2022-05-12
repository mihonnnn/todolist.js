import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = text;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;
    const addTargetInner = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    //div以下を初期化
    addTargetInner.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグ
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div)を完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTargetInner.appendChild(p);
    addTargetInner.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div)を未完了リストから削除
    //const deleteTaret = deleteButton.parentNode.parentNode;
    //console.log(deleteTaret);
    //document.getElementById("incomplete-list").removeChild(deleteTaret);

    //下記の関数を使って1行で書く方法
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //  console.log(completeButton);
  // console.log(deleteButton);

  //liタグの子要素に各要素を指定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

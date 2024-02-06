// 解答例 (色々な実装方法があるため、この実装はあくまでも1つの実装例として考えること。)

(() => {
  // 利用するAPI情報元
  //   - 本サイト : https://opentdb.com/
  //   - 利用するAPI : https://opentdb.com/api.php?amount=10&type=multiple

  const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';


  // - クイズアプリのデータ管理用オブジェクト
  //   - currentIndex : 現在何問目のクイズに取り組んでいるのかをインデックス番号で保持する
  //   - numberOfCorrects : 正答数を保持するう

  const quisData = {
    quizzes: [],         // クイズデータを保持する配列
    currentIndex: 0,     // 現在の問題のインデックス
    numberOfCorrects: 0, // 正答数
  };


  var questionDOM = document.getElementById('question');
  var answers = document.getElementById('answers');
  // var answerArray=quisData.quizzes[0].correct_answer
  // console.log(answerArray)
  // - 保持する情報
  // var answerArray1 = quisData.quizzes[0].correct_answer;

  //   - quizzes : fetchで取得したクイズデータの配列(resutls)を保持する
  async function getQuizzes() {

    try {
      const response = await fetch(API_URL);
      const data = await response.json();



      quisData.quizzes = data.results;
      quisData.currentIndex = 0;
      quisData.numberOfCorrects = 0;


      console.log(quisData.quizzes);

      console.log(quisData.quizzes[0].question);

      console.log(quisData.quizzes[0].correct_answer);
      console.log(quisData.quizzes[0].incorrect_answers);

      return quisData;
    } catch (error) {
      console.error('取得失敗:', error);
      throw error;
    }
  }
  // getQuizzesを実行してクイズデータを取得
  getQuizzes().then(() => {
    questionDOM.textContent = quisData.quizzes[0].question;
  });

// answers
// 取得したanswersをシャッフル
// function answerShuffle(answerArray){
// for(let i =(answerArray.length - 1); i >= 0; i--){

//   let r =Math.floor(Math.random() * answer.length);
//   let tmp =answerArray[i];
//   answerArray[i]=answerArray[r];
//   answerArray[r]=tmp;
// }

// return answerArray;
// }
  // HTMLのid値がセットされているDOMを取得する



  // ページの読み込みが完了したらクイズ情報を取得する

  // console.log(quizData.question[0].incorrect_answers)




  // 「Restart」ボタンをクリックしたら再度クイズデータを取得する


  // `fetchQuizData関数`を実装する
  // - 実現したいこと
  //   - async/awaitを使って実装する
  //   - Webページ上の表示をリセットする
  //     - id属性値が 'question' の要素に「Now loading...」という文字列をセットする
  //     - id属性値が 'result' の要素に空文字列をセットする (Restartボタンでクイズ2回以上繰り返す時用)
  //     - id属性値が 'restart-button' の要素を非表示にする (Restartボタンでクイズ2回以上繰り返す時用)
  //   - クイズ取得~取得後の流れ
  //     1. API_URLとFetch API(fetchメソッド)を使ってAPI経由でデータを取得する
  //       - https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch
  //     2. fetchメソッドで取得したResponseデータからJSON形式のデータをオブジェクトに変換する
  //       - https://developer.mozilla.org/ja/docs/Web/API/Response
  //     3. 2で取得したデータの中にresultsプロパティ(配列)があり、その中には10件のクイズデータがある。
  //        その10件のデータを利用してクイズの出題・回答を出来るようにする。(詳しくは完成形の画像を参照)
  // - 引数
  //   - 無し
  // - 戻り値
  //   - 無し


  // setNextQuiz関数を実装する
  // - 実現したいこと
  //   - 表示要素をリセットする
  //     - 問題文を空にする
  //     - 解答一覧を全て消す
  //   - 条件に応じて、次の問題の表示 or 結果を表示する
  //     - 次の問題がまだ存在すれば次の問題をセットする
  //     - 直前に解答したのが最後の問題であれば結果を表示する(finishQuiz関数を実行する)
  // - 引数
  //   - 無し
  // - 戻り値
  //   - 無し
  // const setNextQuiz =>{

  // }


  // finishQuiz関数を実装する
  // - 実現したいこと
  //   - 正答数を表示する(例: 4問正解したばあいは 「4/10 corrects」と表示する)
  //   - 「Restart」ボタンを表示する
  // - 引数
  //   - 無し
  // - 戻り値
  //   - 無し


  // removeAllAnswers関数を実装する
  // - 実現したいこと
  //   - 解答を全て削除する
  // - 引数
  //   - 無し
  // - 戻り値
  //   - 無し


  // makeQuiz関数を実装する
  // - 実現したいこと
  //   - クイズデータを元にWebページ上に問題と解答リストを表示する
  //   - 解答をクリックしたら、正解・不正解のチェックをする
  //     - 正解の場合
  //       - 「gameState」オブジェクトで管理している正答数プロパティをインクリメントする
  //       - 「Correct answer!!」とアラート表示する
  //     - 不正解の場合
  //       - 「Wrong answer... (The correct answer is "実際の答えを埋め込む")」とアラート表示する
  //   - 回答する度に「gameState」オブジェクトで管理している、問題数プロパティをインクリメントする
  //   - setNextQuiz関数を実行して次の問題をセットする(最後の問題の場合は結果を表示する。)
  // - 引数
  //   - 無し
  // - 戻り値無し
  //   - 無し


  // quizオブジェクトの中にあるcorrect_answer, incorrect_answersを結合して
  // 正解・不正解の解答をシャッフルする。


  // `shuffle関数` を実装する
  // - 実現したいこと
  //   - 引数で受け取った配列内の値をシャッフルする
  //   - 引数で渡された配列を上書きしないように、シャッフルする配列はコピーしたものを使う
  //   - シャッフルの機能を実現するのに参考になるサイト
  //     - https://qiita.com/artistan/items/9eb9a0fb14f4ec3a8764
  // - 引数
  //   - array : 配列
  // - 戻り値
  //   - shffuledArray : シャッフル後の配列(引数の配列とは別の配列であることに注意する)



  // unescapeHTML関数を実装する
  // - 実現したいこと
  //   - &やクオーテーションマークなどが特殊文字としてセットされているので、
  //     人間が読みやすい形式に変換した文字列を取得する(エスケープ文字を元に戻す)
  //     参考にしたサイト : http://blog.tojiru.net/article/211339637.html
  // - 引数
  //   - 文字列
  // - 戻り値
  //   - 文字列



})();
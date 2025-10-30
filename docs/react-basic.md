# React 基礎

UI を作成するためのライブラリ \
Web が多いが、それに限らない(React Native, React Ink)

## 基本的な流れ(Web)

HTML 初期描画 -> HTML とイベント処理の紐づけ(JavaScript) -> イベント(JavaScript) -> ロジック処理(JavaScript) -> HTML に適用

React なしだと、これを手作業で行い、手続き的に記述する必要がある \
querySelector, onClick, AddEventListener, … \
特に UI とスクリプトを紐づけ・反映する部分が大変だし量も多い

React だと、同じ言語(JSX)ですべてを記述でき、宣言的に書ける

### React とは

- UI をコンポーネントの組み合わせで作成する
- コンポーネントはただの関数である
  - 入力があって、出力を返す
- コンポーネントはデータから表示を返す
  - 手続きではなく宣言

### JSX とは

JavaScript 内で HTML のような構文を書ける記法

- `className`など、HTML とは一部異なる属性名を使用
- `{}`内で JavaScript の式を埋め込める

### TypeScript 基礎

#### 展開する系

```ts
// 配列

const array1 = [1, 2, 3];
const array2 = [array, 4, 5];
// -> [[1, 2, 3], 4, 5]
// -> 多分意図してない形
const array2fix = [...array, 4, 5];
// -> [1, 2, 3, 4, 5]

// objectでもできる

const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }

// 条件付きで要素を追加するとか

const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}), // isSumerがtrueの時だけwatermelonが追加される
};
```

#### 関数

```ts
// 関数宣言
function Fun1() {}

// アロー関数式（無名）
() => {};

// アロー関数式を変数に代入
const Fun2 = () => {};

// 関数を引数として受け取る  ↓は無名関数ではなく関数の型
function ReceiveFun(fun: () => void) {
  fun();
}

// 渡し方
ReceiveFun(Fun1);
ReceiveFun(Fun2);
ReceiveFun(() => {});
```

#### テンプレートリテラル

```ts
const a = "a";
const b = "b";

const str1 = "123" + a + "456" + b + "789";
const str2 = `123${a}456${b}789`;
// -> どちらも 123a456b789

const str3 = `test
test
test`;
// 改行が保持される
```

#### JSON の注意

JSON には Date 型がないため、JSON を介すと文字列になってしまう
-> 特定のフォーマットの文字列にするか、unix time にするか、文字列を再度 Date 型に戻すなどの対応が必要
-> (Date 型のままだと面倒なのでそれ以外が良さげ)

```ts
const obj = {
  date: new Date(),
};

const objString = JSON.stringify(obj);

console.log(JSON.parse(objString));
// -> {
//  "date": "2025-10-30T07:25:12.697Z"
//}
```

### React 記法基礎

#### JSX の構造

```tsx
const Component = () => {
  // ロジック部分
  const text = "text";
  const upperText = text.toUpperCase();

  // UI部分(関数の返り値として要素を返す)
  return <p>{upperText}</p>;
};
```

#### コンポーネントは先頭大文字

```tsx
// NG
const component = () => {
  return <p>text</p>;
};

// OK
const Component = () => {
  return <p>text</p>;
};
```

#### 1 つの要素のみ返す

```tsx
// NG
const Component = () => {
  return (
    <p>text</p>
    <p>text2</p>
  );
}

// OK
const Component = () => {
  return (
    <div>
      <p>text</p>
      <p>text2</p>
    </div>
  );
}

// OK(Fragmentを使うと余計な要素を増やさないで済む)
const Component = () => {
  return (
    <>
      <p>text</p>
      <p>text2</p>
    </>
  );
}
```

#### 関数なので、無名関数でも関数宣言でも OK

```tsx
// OK
const Component = () => {
  return <p>text</p>;
};

// OK
function Component() {
  return <p>text</p>;
}
```

#### 引数を受け取る

```tsx
type Props: {
  text: string;
}

const Component = (props: Props) => {
  const text = props.text;
  return <p>{text}</p>;
}

const Component = ({text}: Props) => {
  return <p>{text}</p>;
}

const Component = ({text}: {text: string}) => {
  return <p>{text}</p>;
}

// 使う側
const Parent = () => {
  return Component text="my text" />;
}
```

#### Children パターン

```tsx
type Props = {
  children: ReactNode;
}

const Wrapper = ({children}: Props) {
  return (
    <div>
      {children}
    </div>
  )
}

// 利用側
const Component = () => {
  return (
    <Wrapper>
      <p>text</p>
    </Wrapper>
  )
}
```

#### state(状態)の利用

```tsx
const Component = () => {
  //     状態   更新用関数
  const [name, setName] = useState("init name");

  return (
    <>
      <p>{name}</p>
      <button
        onClick={() => {
          setName("new name"); // ボタンクリックで状態を更新
        }}
      >
        update
      </button>
    </>
  );
};
```

#### state の遅延初期化

- useState の初期値には、関数を渡すことができる
- 複雑な処理を行ってから初期値の設定をすることが可能
- また、この計算は最初のレンダリング時のみに行われる特性があるため、重い処理がある場合もこのように初期化することが多い

```ts
const [name, setName] = useState(() => {
  const myName = "abc";
  return myName;
});

/// 以下も同じ

const [name, setName] = useState(getName);

const getMyName = () => {
  const myName = "abc";
  return myName;
};
```

#### カスタム hook の利用

##### hook とは

- state(useState)など、React の機能を提供するもの
- コンポーネント内でしか使えない
- コンポーネントのトップレベルでしか使えない
  - 条件分岐などで使えない

```tsx
// NG
const Component = () => {
  if (condition) {
    const [state, updateState] = useState(0);
  }

  return <></>;
};
```

##### カスタム hook とは

- ロジック部分に書くコードは関数として切り出せる
- 単純な関数の場合は純粋関数として切り出せばいいが、React の機能(state など)を利用する場合、純粋関数には切り出せない
- その場合、カスタム hook として切り出す
  - 標準の hook と区別するために、自分で作成した hook はカスタム hook と呼ぶ
- hook は useHoge のように、use から始める

```ts
const useMyHook = () => {
  const [state, updateState] = useState(0);
  const doubleState = state * 2;

  return { state, doubleState, updateState };
};
```

```tsx
// 利用側

const Component = () => {
  const { state, doubleState, updateState } = useMyHook();

  return (
    <>
      <p>{state}</p>
      <p>{doubleState}</p>
      <button
        onClick={() => {
          updateState(Math.random());
        }}
      >
        update
      </button>
    </>
  );
};
```

#### global state の利用

= どこのコンポーネントでも利用できる State \
-> ここでは jotai を利用

```ts
// inputの状態を管理するatomを定義
const inputAtom = atom("");

// 値とセット関数を返すカスタムフック
export const useInputAtom = () => {
  const inputValue = useAtomValue(inputAtom);
  const setInputValue = useSetAtom(inputAtom);
  // useStateのように
  // const [inputValue, setInputValue] = useAtom(inputAtom);
  // 形式でもOK

  return { inputValue, setInputValue };
};
```

```tsx
// 利用側

// 読み取るだけ
const ReadComponent = () => {
  const { inputValue } = useInputAtom();

  return <p>{inputValue}</p>;
};

// 書き込むだけ
const WriteComponent = () => {
  const { setInputValue } = useInputAtom();

  return (
    <>
      <button
        onClick={() => {
          setInputValue(`${Math.random()}`);
        }}
      >
        update
      </button>
    </>
  );
};

// 別々のコンポーネントで状態が同期
const App = () => {
  return (
    <>
      <ReadComponent />
      <WriteComponent />
    </>
  );
};
```

https://jotai.org/docs/core/atom

#### form action の利用

-> React での form の使い方(最もシンプルなもの)

```tsx
export const FormSample = () => {
  const onSubmit = (data: FormData) => {
    const formData = Object.fromEntries(data.entries());

    console.log(formData);
  };

  return (
    <form className="flex gap-4" action={onSubmit}>
      <input
        name="title"
        type="text"
        className="p-2 border-2 border-slate-500 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-slate-700 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};
```

1. form 要素と input などの入力要素、button 要素(type が submit)
2. input には name 属性をつける
3. FormData を受け取る関数を定義し、form の action に設定する
4. submit すると action が実行される
5. FormData は様々なメソッドを使って操作するが、`Object.fromEntries(data.entries())`とすると素直なオブジェクトになって楽

https://ja.react.dev/reference/react-dom/components/form
https://developer.mozilla.org/ja/docs/Web/API/FormData

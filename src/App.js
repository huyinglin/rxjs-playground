import React, { useEffect } from 'react';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { styled } from '@linaria/react';
import './App.css';

const CounterView = ({count, onIncrement, onDecrement}) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const Container = styled.div`
  color: red;
`;

class RxCounter extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {count: 0};

    this.counter = new Subject();

    this.counter
      .pipe(scan((result, inc) => result + inc, 0))
      .subscribe(value => this.setState({count: value}));
  }

  render() {
    return <CounterView
      count={this.state.count}
      onIncrement={()=> this.counter.next(1)}
      onDecrement={()=> this.counter.next(-1)}
    />
  }
}

function App() {

  useEffect(() => {

    // const map = (val) => val * 2;

    // const foo = new Observable(subscriber => {

    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);

    //   // setTimeout(() => {
    //   //   subscriber.next(4);
    //   //   subscriber.complete();
    //   //   subscriber.next(5);
    //   // }, 1000);

    //   try {
    //     subscriber.next(6);
    //   } catch (err) {
    //     subscriber.error(err);
    //   }

    // });

    // foo.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('err: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   }
    // });

    // console.log('after');

    // console.log('----');
    // foo.subscribe(x => {
    //   console.log('--', x);
    // });
    // console.log('----');

  }, []);


  // useEffect(() => {

    // const observable = new Observable(function subscribe(subscriber) {
    //   const intervalId = setInterval(() => {
    //     subscriber.next('hi');
    //   }, 1000);

    //   return function unsubscribe() {
    //     clearInterval(intervalId);
    //   };
    // });

    // observable.subscribe(x => console.log(x));

    // observable.subscribe(
    //   x => console.log('Observer got a next value: ' + x),
    //   err => console.error('Observer got an error: ', + err),
    //   () => console.log('Observer got a complete notification')
    // );

    // setTimeout(() => {
    //   // observable.unsubscribe();
    // }, 3 * 1000);

    // map(x => x + x)(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));
    // 打印：
    // value: 2
    // value: 4
    // value: 6

    // first()(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));

    // const observable = interval(1000);
    // const subscription = observable.subscribe(x => console.log(x));


    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5 * 1000);

  // }, []);

/* ================================= Subject ================================ */

  // useEffect(() => {
  //   const subject = new Subject();

  //   subject.subscribe({
  //     next: v => console.log(`observerA: ${v}`)
  //   });

  //   subject.subscribe({
  //     next: v => console.log(`observerB: ${v * v}`)
  //   });

  //   // subject.next(1);
  //   // subject.next(2);

  //   const observable = from([1, 2, 3]);

  //   observable.subscribe(subject);

/* ============================== combineLatest ============================= */

  // const firstTimer = timer(0, 1000);

  // const secondTimer = timer(1000, 1000);

  // const firstTimerO = firstTimer.subscribe(x => console.log(`firstTimer: ${x}`));
  // const secondTimerO = secondTimer.subscribe(x => console.log(`secondTimer: ${x}`));

  // const combineTimers = combineLatest([firstTimer, secondTimer]);

  // const combine = combineTimers.subscribe(val => console.log(val));

  // setTimeout(() => {
  //   firstTimerO.unsubscribe();
  //   secondTimerO.unsubscribe();
  //   combine.unsubscribe();
  // }, 5 * 1000);

/* ================================ switchMap =============================== */

  // const source = timer(0, 5000);

  // const example = source.pipe(switchMap(() => interval(500)));

  // const subscribe = example.subscribe(val => console.log(val));

  // setTimeout(() => {
  //   subscribe.unsubscribe();
  // }, 10 * 1000);

  // }, []);

/* ================================= 实现一个操作符 ================================ */

  // useEffect(() => {

  //   // function map(project) {
  //   //   return new Observable(observer => {
  //   //     const sub = this.subscribe({
  //   //       next: value => {
  //   //         /**
  //   //          * 当 project 的调用出现错误时，整个程序都会破坏掉，
  //   //          * 更好的处理方式是捕获异常错误，把异常错误沿着数据流往下游传递，
  //   //          * 最终如何处理交给 Observer 来决定，这是更加可控的方法。
  //   //          *
  //   //          * 所以，map 有两种可能向下游传递 error 消息的方式：
  //   //          * 1. 上游的 error 直接转手给下游
  //   //          * 2. project 函数执行过程中产生的 error 也交给下游
  //   //          */
  //   //         try {
  //   //           observer.next(project(value));
  //   //         } catch (err) {
  //   //           observer.error(err);
  //   //         }
  //   //       },
  //   //       error: err => observer.error(err),
  //   //       complete: () => observer.complete(),
  //   //     });

  //   //     return {
  //   //       /**
  //   //        * 当不再需要从某个 Observable 对象获取数据的时候，就要退订这个 Observable 对象。
  //   //        */
  //   //       unsubscribe: () => {
  //   //         sub.unsubscribe();
  //   //       }
  //   //     }
  //   //   });
  //   // }
  //   // // of(1, 2, 3, 4).
  //   // const result$ = map(x => x * 2);

  //   // result$.subscribe({

  //   // })


  //   const source$ = generate(
  //     'x',
  //     v => v.length <= 3,
  //     v => v + 'x',
  //   );

  //   source$.pipe(repeat(10)).subscribe(console.log)

  // }, []);

  // const [count, setCount] = React.useState(0);
  // const btnRef = React.useRef();

  // React.useEffect(() => {
  //   const event$ = fromEvent(btnRef.current, 'click');
  //   const event = event$.subscribe(() => {
  //     setCount(count + 1);
  //   });

  //   return () => event.unsubscribe();
  // }, [count]);

  return (
    // <RxCounter/>
    <Container>
      dsfsdf
    </Container>
  );
}

export default App;

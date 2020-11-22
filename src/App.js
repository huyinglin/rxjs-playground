import { useEffect } from 'react';
import {
  Observable,
  of,
  interval,
  from,
  Subject,
  combineLatest,
  timer,
} from 'rxjs';
import {
  map,
  first,
  switchMap,
} from 'rxjs/operators';

function App() {

  // useEffect(() => {

  //   const foo = new Observable(subscriber => {

  //     subscriber.next(1);
  //     subscriber.next(2);
  //     subscriber.next(3);

  //     setTimeout(() => {
  //       subscriber.next(4);
  //       subscriber.complete();
  //       subscriber.next(5);
  //     }, 1000);

  //     try {
  //       subscriber.next(6);
  //     } catch (err) {
  //       subscriber.error(err);
  //     }

  //   });

  //   console.log('before');
  //   foo.subscribe({
  //     next(x) {
  //       console.log('got value ' + x);
  //     },
  //     error(err) {
  //       console.error('err: ' + err);
  //     },
  //     complete() {
  //       console.log('done');
  //     }
  //   });

  //   console.log('after');

  //   console.log('----');
  //   foo.subscribe(x => {
  //     console.log('--', x);
  //   });
  //   console.log('----');

  // }, []);


  useEffect(() => {

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

  const source = timer(0, 5000);

  const example = source.pipe(switchMap(() => interval(500)));

  const subscribe = example.subscribe(val => console.log(val));

  setTimeout(() => {
    subscribe.unsubscribe();
  }, 10 * 1000);

  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;

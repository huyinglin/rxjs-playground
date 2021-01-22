import React, { useEffect } from 'react';
import { Observable, Subject, interval, range, asapScheduler, fromEvent } from 'rxjs';
import { scan, take, map } from 'rxjs/operators';

function App() {

/* ============================== 创建 Observable ============================= */
  useEffect(() => {

    const onSubscribe = observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    };
    const source$ = new Observable(onSubscribe);

    const theObserver = {
      next: val => console.log(val),
    };
    source$.subscribe(theObserver);

  }, []);

// /* ============================ 跨越时间的 Observable ============================ */
  useEffect(() => {

    const onSubscribe = observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);

      setTimeout(() => {
        observer.next(4);
      }, 2 * 1000);
    };
    const source$ = new Observable(onSubscribe);

    const theObserver = {
      next: val => console.log(val),
    };
    source$.subscribe(theObserver);

  }, []);

// /* ============================ 永无止境的 Observable ============================ */
//   useEffect(() => {

//     const onSubscribe = observer => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);

//       let number = 1;
//       setInterval(() => {
//         observer.next(number++);
//       }, 1000);
//     };
//     const source$ = new Observable(onSubscribe);

//     const theObserver = {
//       next: val => console.log(val),
//     };
//     source$.subscribe(theObserver);

//   }, []);

// // /* ============================= Observable 的完结 ============================= */
//   useEffect(() => {

//     const onSubscribe = observer => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);

//       let number = 1;

//       const timer = setInterval(() => {
//         observer.next(number++);

//         if (number > 3) {
//           clearInterval(timer);
//         }
//       }, 1000);
//     };
//     const source$ = new Observable(onSubscribe);

//     const theObserver = {
//       next: val => console.log(val),
//     };
//     source$.subscribe(theObserver);

//   }, []);

//   useEffect(() => {

//     const onSubscribe = observer => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);

//       let number = 1;

//       const timer = setInterval(() => {
//         observer.next(number++);
//         if (number > 3) {
//           clearInterval(timer);

//           observer.complete(); // 表示数据流的完结

//         }
//       }, 1000);
//     };
//     const source$ = new Observable(onSubscribe);

//     const theObserver = {
//       next: val => console.log(val),
//       complete: () => console.log('No More Data'),
//     };
//     source$.subscribe(theObserver);

//   }, []);

// /* ============================ Observable 的错误处理 ============================ */
//   useEffect(() => {

//     const onSubscribe = observer => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);

//       try {
//         observer.next(4);
//       } catch (err) {
//         observer.error(err);
//       }
//     };
//     const source$ = new Observable(onSubscribe);

//     const theObserver = {
//       next: val => console.log(val),
//       error: err => console.log(`Error: ${err}`),
//     };
//     source$.subscribe(theObserver);

//   }, []);

// /* =========================== Observable 只有一种终结状态 ========================== */
  useEffect(() => {

    const onSubscribe = observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);

      try {
        observer.next(4);
      } catch (err) {
        observer.error(err);
      }

      observer.complete();

    };
    const source$ = new Observable(onSubscribe);

    const theObserver = {
      next: val => console.log(val),
      error: err => console.log(`Error: ${err}`),
      complete: () => console.log('No More Data'),
    };
    source$.subscribe(theObserver);

  }, []);

// /* ============================== Observer 的简单形式 ============================= */
//   useEffect(() => {

//     const onSubscribe = observer => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);

//       try {
//         observer.next(4);
//       } catch (err) {
//         observer.error(err);
//       }

//       observer.complete();

//     };
//     const source$ = new Observable(onSubscribe);

//     source$.subscribe(
//       val => console.log(val),
//       err => console.log(err),
//       () => console.log('No More Data')
//     );

//   }, []);

// /* ============================= Observable 的退订 ============================= */
//   useEffect(() => {

//     const onSubscribe = observer => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);

//       try {
//         observer.next(4);
//       } catch (err) {
//         observer.error(err);
//       }

//       observer.complete();

//     };
//     const source$ = new Observable(onSubscribe);

//     const subscription = source$.subscribe(
//       val => console.log(val),
//       err => console.log(err),
//       () => console.log('No More Data')
//     );

//     setTimeout(() => {
//       subscription.unsubscribe();
//     }, 10 * 1000);

//   }, []);

// /* ================================ Operators =============================== */
//   useEffect(() => {

//     const onSubscribe = observer => {
//       observer.next(1);
//       observer.next(2);
//       observer.next(3);
//     };
//     const source$ = new Observable(onSubscribe);

//     source$
//       .pipe(
//         map(v => v * v),
//       )
//       .subscribe(val => console.log(val));

//   }, []);


// /* ================================= Subject ================================ */
//   useEffect(() => {

//     const tick$ = interval(1000).pipe(take(3));

//     const subject = new Subject();

//     tick$.subscribe(subject);

//     subject.subscribe(value => console.log('observer 1: ' + value));

//     setTimeout(() => {
//       subject.subscribe(value => console.log('observer 2: ' + value));
//     }, 1500);

//   }, []);

/* ================================ Scheduler =============================== */

  // useEffect(() => {

  //   const timeStart = new Date();
  //   const source$ = range(1, 100000);

  //   console.log('before subscribe');

  //   source$.subscribe({
  //     complete: () => {
  //       console.log('Time elapsed: ' + (Date.now() - timeStart) + 'ms');
  //     }
  //   });

  //   console.log('after subscribe');

  // }, []);

  useEffect(() => {

    const timeStart = new Date();
    const source$ = range(1, 100000, asapScheduler);

    console.log('before subscribe');

    source$.subscribe({
      complete: () => {
        console.log('Time elapsed: ' + (Date.now() - timeStart) + 'ms');
      }
    });

    console.log('after subscribe');

  }, []);

  return (
    <div></div>
  );
}

export default App;

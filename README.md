# javascript-racingcar-precourse

## 기능 요구 사항
>
> 초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 기능 분석 및 테스트 계획

1. 자동차 이름 확인

- 함수: `validateCarNames(names)`
- 목적: 각 자동차 이름은 5자 이하여야 하며 이름은 쉼표로 구분되어야 한다.
- 테스트: 5자를 초과하는 이름이나 잘못된 입력에 대해 함수에서 오류가 발생한다.
  - 유효한 자동차 이름을 확인한다.

2. 이동 횟수 확인

- 함수: `validateMoveCount(count)`
- 목적: 개수가 양의 정수인지 확인한다.
- 테스트: 음수 또는 정수가 아닌 입력값은 함수에서 오류가 발생한다.
  - 유효한 시도 횟수를 확인한다.

3. 자동차 초기화

- 함수: `initializeCars(names)`
- 목적: 이름과 초기 위치가 포함된 자동차 목록을 만든다.
- 테스트: 이름과 위치가 0으로 설정된 자동차를 초기화하는지 확인한다.

4. 자동차 경기 시작

- 함수: `startRace(cars, moves)`
- 목적: 시도할 횟수만큼 `runRound` 함수를 실행시킨다.
- 테스트: `runRound`가 올바른 횟수만큼 호출되었는지 확인한다.

5. 단일 라운드 실행

- 함수: `runRound(cars)`
- 목적: 각 자동차가 움직이거나 멈추는 레이스의 한 라운드를 실행한다.
- 테스트: 단일 라운드에서 자동차가 예상대로 움직이거나 멈추는지 확인한다.
  
6. 자동차 이동 시물레이션

- 함수: `moveCar(car)`
- 목적: 무작위 값이 4 이상이면 자동차를 움직인다.
- 테스트: 자동차 움직임을 검증하기 위해 무작위 기능을 확인한다.
  - 무작위 값이 4보다 작으면 자동차를 움직이지 않는다.

7. 시뮬레이션 실행 결과

- 함수: `printRoundResults(cars)`
- 목적: 자동차 이동 시뮬레이션 결과를 출력한다.

8. 우승자 발표

- 함수: `getWinners(cars)`
- 목적: 가장 멀리 이동한 차량을 식별한다.
- 테스트: 동점자가 있거나 확실한 우승자가 있을 때 올바른 우승자가 발표되는지 확인한다.

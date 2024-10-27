import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트: 유효하지 않은 자동차 이름", () => {
    const app = new App();
    expect(() => app.validateCarNames(["pobi,javaji"])).toThrow("[ERROR] 자동차 이름은 최대 5자 이하이어야 합니다.");
  });

  test("유효한 자동차 이름", () => {
    const app = new App();
    expect(() => app.validateCarNames(["pobi", "woni"])).not.toThrow();
  });


  test("예외 테스트: 유효하지 않은 시도 횟수", () => {
    const app = new App();
    expect(() => app.validateMoveCount("0")).toThrow("[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.");
  });

  test("유효한 시도 횟수", () => {
    const app = new App();
    expect(() => app.validateMoveCount("3")).not.toThrow();
  });
});

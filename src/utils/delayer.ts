// TODO: publish npm

interface Params {
  delay: number;
  callback: Function;
}

export class Delayer {
  private interval?: NodeJS.Timer;

  private timeout?: NodeJS.Timeout;

  private elapsedMs = 0;

  private intervalFrequencyMs = 100;

  private delayMs: number;

  private callback: Function;

  constructor({ delay, callback }: Params) {
    this.delayMs = delay;
    this.callback = callback;
  }

  startTimer(): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.elapsedMs += this.intervalFrequencyMs;
      }, this.intervalFrequencyMs);
    }
  }

  stopTimer(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  callFunctionAfterDelay(): Promise<any> {
    return new Promise((resolve) => {
      const remainingMsToWait = Math.max(this.delayMs - this.elapsedMs, 0);

      this.timeout = setTimeout(() => {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        resolve(this.callback());
      }, remainingMsToWait);
    });
  }
}

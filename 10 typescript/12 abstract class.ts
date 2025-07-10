/**추상 클래스
 * - 클래스와는 다르게 인스턴스화할 수 없는 클래스
 * - 목적: 상속을 통해 자식 클래스에서 메서드를 제각각 구현하도록 강제하는 용도
 * - 최소한의 기본 메서드는 정의할 수 있음
 * - 핵심 기능의 구현은 전부 자식 클래스에게 위임
 */

abstract class Media {
  constructor(public title: string) {}
  abstract play(): void;
}

class Song extends Media {
  play() {
    console.log(`${this.title} 재생 중..`);
  }
}

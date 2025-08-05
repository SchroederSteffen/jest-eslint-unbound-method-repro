import { SomeService } from "./service";

describe("SomeService", () => {
  let service: SomeService;

  beforeEach(() => {
    service = {
      method: jest.fn(),
    };
  });

  it("should not report inline .mock access", () => {
    const parameter = jest.mocked(service.method).mock.calls[0][0];
    expect(parameter).toBeTruthy();
  });

  it("should not report separate .mock access", () => {
    const mockedMethod = jest.mocked(service.method);
    const parameter = mockedMethod.mock.calls[0][0];
    expect(parameter).toBeTruthy();
  });

  it("should not report mocking", () => {
    jest.mocked(service.method).mockReturnValue();
    expect(service.method).toBeTruthy();
  });
});

import { expect } from "chai";

import index from "./index.js";

describe("TypeScript usage suite", () => {
	it("should be able to execute a test", () => {
		expect(true).to.be.eql(true);
	});

	it("should return expected string", () => {
		expect(index("incoming")).to.be.eql("incoming-static");
	});
});

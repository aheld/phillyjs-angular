beforeEach(function() {
  this.addMatchers({
    sumShouldBe: function(expected) {
      return this.actual === expected;
    }
  });
});

describe("Add - Single digit cases", function() {
  it("should return 0 for an empty string input", function() {
    expect(Add("")).toEqual(0);
    });
  it("should return a number for an string input of that number", function() {
      [["1",1],["2",2],["3",3]].forEach(function(x){
        expect(Add(x[0])).toEqual(x[1]);
      });
    });
  it("should return an Error for a negative input -1", function() {
    expect(function(){Add("-1");}).toThrow(Error("negatives not allowed"));
    });
});

describe("Add - Multiple digit cases", function() {
    it("should return 3 for an string input of '1\\n2'", function() {
    expect(Add("1\n2")).toEqual(3);
    });
    it("should return 3 for an string input of '1,2'", function() {
    expect(Add("1,2")).toEqual(3);
    });
  it("should return 5 for an string input of '1,2,2'", function() {
    expect(Add("1\n2\n2")).toEqual(5);
    });
 it("should return 5 for an string input of '1,2\\n2'", function() {
    expect(Add("1,2\n2")).toEqual(5);
    });

});

describe("Delimeted parsing", function() {
    it("should return the same string passed in when it does not start with //", function() {
      var inp = "aksdjkasjfklasf";
    expect(returnDelimAndNumbers(inp).numbers).toEqual(inp);
    });
    it("should return numbers of '1;2' and delimeter of '[\\n,;]' for an input of '//;\\n1;2'", function() {
      var inp = "//;\n1;2";
    expect(returnDelimAndNumbers(inp).numbers).toEqual('1;2');
    expect(returnDelimAndNumbers(inp).delimeter).toEqual('[\n,;]');
    });
});

describe("Add - Variable Delimeter", function() {
    it("should return numbers of '6' for an input of '//;\\n1;2;3'", function() {
      var inp = "//;\n1;2;3";
    expect(Add(inp)).toEqual(6);
    });
    it("should return the correct answer for mixed delims such as //;\n1;2\n3", function() {
    expect(Add('//;\n1;2\n3')).toEqual(6);
    expect(Add('//;\n1;2\n3')).toEqual(6);
    expect(Add('//;\n1;2,3')).toEqual(6);
    });
    it("should allow - as a delim", function() {
    expect(Add('//-\n1-2-3')).toEqual(6);
    expect(Add('//-\n1-2\n3')).toEqual(6);
    expect(Add('//-\n1-2,3')).toEqual(6);
    });

    it("should call AddSimple with the correct args",function(){
      AddSimple = jasmine.createSpy("add Simple");
      Add('//-\n1-2-3');
      expect(AddSimple.mostRecentCall.args[0]).toEqual('1-2-3');
      expect(AddSimple.mostRecentCall.args[1]).toEqual('[\n,-]');
      expect(AddSimple).toHaveBeenCalledWith("1-2-3","[\n,-]");
    });

});


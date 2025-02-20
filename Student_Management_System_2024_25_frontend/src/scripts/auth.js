var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//register user
var registrationFormName = document.getElementById("full-name");
var registrationFormEmail = document.getElementById("email");
var schoolId = document.getElementById("schoolId");
var registrationFormPassword = document.getElementById("password");
var registrationFormConfirmPassword = document.getElementById("confirm");
var registrationFormYear = document.getElementById("year");
var registrationFormDepartment = document.getElementById("department");
var alertSpan = document.getElementById("alert");
var registerBtn = document.getElementById("button");
registerBtn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var name, email, password, confirmPassword, year, department, data, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = registrationFormName.value;
                email = registrationFormEmail.value || "";
                password = registrationFormPassword.value || "";
                confirmPassword = registrationFormConfirmPassword.value || "";
                year = registrationFormYear.value;
                department = registrationFormDepartment.value;
                if (!(!name ||
                    !email ||
                    !password ||
                    !confirmPassword ||
                    password !== confirmPassword ||
                    !year ||
                    !department)) return [3 /*break*/, 1];
                alertSpan.innerText = "Please fill all the fields properly";
                return [3 /*break*/, 5];
            case 1:
                data = {
                    name: name,
                    email: email,
                    password: password,
                    year: year,
                    department: department,
                    role: "Student",
                };
                console.log("Register user started");
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, register(data)];
            case 3:
                response = _a.sent();
                console.log(response); // Log the response (or handle it as needed)
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error("Error registering user:", error_1);
                alertSpan.innerText = "Registration failed. Please try again.";
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
function register(body) {
    return __awaiter(this, void 0, void 0, function () {
        var BASE_URL, response, jsson, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    BASE_URL = "http://127.0.0.1:4000";
                    console.log("api called");
                    return [4 /*yield*/, fetch(BASE_URL + "/auth/register", {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                            },
                            body: JSON.stringify(__assign(__assign({}, body), { year: Number(body.year) })),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsson = _a.sent();
                    window.location.href = "login.html";
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, error_2];
                case 4: return [2 /*return*/];
            }
        });
    });
}

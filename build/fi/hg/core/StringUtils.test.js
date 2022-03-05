"use strict";
// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = __importDefault(require("./StringUtils"));
describe('StringUtils', function () {
    describe('.toString', function () {
        test('can stringify array', function () {
            expect(StringUtils_1.default.toString('')).toBe('');
            expect(StringUtils_1.default.toString(false)).toBe('false');
            expect(StringUtils_1.default.toString(true)).toBe('true');
            expect(StringUtils_1.default.toString(null)).toBe('null');
            expect(StringUtils_1.default.toString(undefined)).toBe('undefined');
            expect(StringUtils_1.default.toString('hello')).toBe('hello');
            expect(StringUtils_1.default.toString(123)).toBe('123');
            expect(StringUtils_1.default.toString([])).toBe('');
            expect(StringUtils_1.default.toString([1, 2, 3])).toBe('1,2,3');
            expect(StringUtils_1.default.toString(1, 2, 3)).toBe('123');
            expect(StringUtils_1.default.toString(1, 'hello', 3)).toBe('1hello3');
        });
    });
    describe('.processVariables', function () {
        test('can process empty string value', function () {
            expect(StringUtils_1.default.processVariables('', {}, '${', '}')).toStrictEqual('');
        });
        test('can process empty string value with extra spaces', function () {
            expect(StringUtils_1.default.processVariables('    ', {}, '${', '}')).toStrictEqual('    ');
        });
        test('can process non-empty string value', function () {
            expect(StringUtils_1.default.processVariables('hello world', {}, '${', '}')).toStrictEqual('hello world');
        });
        test('can process single variable in non-empty string value', function () {
            expect(StringUtils_1.default.processVariables('Welcome, ${name}, nice day!', {
                name: 'Nick'
            }, '${', '}')).toStrictEqual('Welcome, Nick, nice day!');
        });
        test('can process two variables in non-empty string value', function () {
            expect(StringUtils_1.default.processVariables('Welcome, ${name}, nice ${time}!', {
                name: 'Nick',
                time: 'evening'
            }, '${', '}')).toStrictEqual('Welcome, Nick, nice evening!');
        });
        test('can process single variable in non-empty string value as typed value', function () {
            expect(StringUtils_1.default.processVariables('${enabled}', {
                enabled: false
            }, '${', '}')).toStrictEqual(false);
        });
        test('can process variables using a function as typed value', function () {
            expect(StringUtils_1.default.processVariables('${enabled}', function (key) { return false; }, '${', '}')).toStrictEqual(false);
        });
        test('can process variables inside strings using a function as typed value', function () {
            expect(StringUtils_1.default.processVariables('Hello, ${enabled}', function (key) { return key; }, '${', '}')).toStrictEqual('Hello, enabled');
        });
        test('can process variables inside strings using a function as typed value with extra spaces', function () {
            expect(StringUtils_1.default.processVariables('Hello, ${ enabled }', function (key) { return key; }, '${', '}')).toStrictEqual('Hello, enabled');
        });
        test('can process variables inside arrays using a function as typed value', function () {
            expect(StringUtils_1.default.processVariables(['Hello, ${enabled}', 'Nice ${time}.'], function (key) { return key; }, '${', '}')).toStrictEqual(['Hello, enabled', 'Nice time.']);
        });
        test('can process variables inside arrays using a function as typed value - test 2', function () {
            expect(StringUtils_1.default.processVariables(['${jsonString}'], function (key) {
                if (key === 'jsonString')
                    return 'hello world';
                return undefined;
            }, '${', '}')).toStrictEqual(['hello world']);
        });
        test('can process variable from string using a function as typed value - test 2', function () {
            expect(StringUtils_1.default.processVariables('${jsonString}', function (key) {
                if (key === 'jsonString')
                    return 'hello world';
                return undefined;
            }, '${', '}')).toStrictEqual('hello world');
        });
        test('can process variables inside objects using a function as typed value', function () {
            expect(StringUtils_1.default.processVariables({
                foo: 'Hello, ${enabled}',
                bar: 'Nice ${time}.'
            }, function (key) { return key; }, '${', '}')).toStrictEqual({
                foo: 'Hello, enabled',
                bar: 'Nice time.'
            });
        });
        test('can process variables inside objects and arrays using a function as typed value', function () {
            expect(StringUtils_1.default.processVariables({
                id: '${id}',
                count: 2,
                list: ['Hello, ${name}', 'Nice ${time}.']
            }, {
                id: 123,
                name: 'Nick',
                time: 'evening'
            }, '${', '}')).toStrictEqual({
                id: 123,
                count: 2,
                list: ['Hello, Nick', 'Nice evening.']
            });
        });
        test('can process variables inside property keywords', function () {
            expect(StringUtils_1.default.processVariables({
                '${keyword}': '${value}'
            }, {
                keyword: 'foo',
                value: 'hello world'
            }, '${', '}')).toStrictEqual({
                foo: 'hello world'
            });
        });
        test('can process variables inside property keywords with extra content', function () {
            expect(StringUtils_1.default.processVariables({
                'xxx${{keyword}}xxx': 'xxx${{value}}xxx'
            }, {
                keyword: 'foo',
                value: 'hello world'
            }, '${{', '}}')).toStrictEqual({
                xxxfooxxx: 'xxxhello worldxxx'
            });
        });
        test('processes only correct prefix and suffix without spaces', function () {
            expect(StringUtils_1.default.processVariables('${{keyword}}${value}', {
                keyword: 'foo',
                value: 'hello world'
            }, '${{', '}}')).toStrictEqual('foo${value}');
        });
        test('processes only correct prefix and suffix with extra leeding space', function () {
            expect(StringUtils_1.default.processVariables(' ${{keyword}}${value}', {
                keyword: 'foo',
                value: 'hello world'
            }, '${{', '}}')).toStrictEqual(' foo${value}');
        });
        test('processes only correct prefix and suffix with more spaces', function () {
            expect(StringUtils_1.default.processVariables(' ${value} ${{keyword}}', {
                keyword: 'foo',
                value: 'hello world'
            }, '${{', '}}')).toStrictEqual(' ${value} foo');
        });
        test('processes only correct prefix and suffix with spaces everywhere', function () {
            expect(StringUtils_1.default.processVariables(' ${value} ${{keyword}} ', {
                keyword: 'foo',
                value: 'hello world'
            }, '${{', '}}')).toStrictEqual(' ${value} foo ');
        });
        test('processes only correct prefix and suffix with spaces everywhere and similar syntax', function () {
            expect(StringUtils_1.default.processVariables(' ${value} ${{keyword}} ', {
                keyword: 'foo',
                value: 'hello world'
            }, '${', '}')).toStrictEqual(' hello world ${{keyword}} ');
        });
        test('can process variables deeper inside objects using a function as typed value', function () {
            expect(StringUtils_1.default.processVariables('${ foo.bar.key }', {
                foo: {
                    bar: {
                        key: 123
                    }
                }
            }, '${', '}')).toStrictEqual(123);
        });
    });
});

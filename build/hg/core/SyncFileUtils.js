"use strict";
// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncFileUtils = void 0;
var LogService_1 = __importDefault(require("./LogService"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var lodash_1 = require("./modules/lodash");
var LOG = LogService_1.default.createLogger('SyncFileUtils');
var SyncFileUtils = /** @class */ (function () {
    function SyncFileUtils() {
    }
    SyncFileUtils.isDirectory = function (dirPath) {
        return fs_1.default.statSync(dirPath).isDirectory();
    };
    SyncFileUtils.directoryExits = function (dirPath) {
        return fs_1.default.existsSync(dirPath) && fs_1.default.statSync(dirPath).isDirectory();
    };
    SyncFileUtils.mkdirp = function (dirPath) {
        LOG.debug("mkdirp: Creating directory: ", dirPath);
        var paths = [];
        while (!SyncFileUtils.directoryExits(dirPath)) {
            paths.push(dirPath);
            var parentPath = path_1.default.dirname(dirPath);
            if (dirPath === parentPath)
                break;
            dirPath = parentPath;
        }
        while (paths.length >= 1) {
            var dir = paths.pop();
            LOG.debug("mkdirp: Creating missing directory: ", dir);
            fs_1.default.mkdirSync(dir);
        }
    };
    SyncFileUtils.readTextFile = function (sourceFile) {
        return fs_1.default.readFileSync(sourceFile, "utf8");
    };
    SyncFileUtils.fileExists = function (targetPath) {
        return fs_1.default.existsSync(targetPath);
    };
    SyncFileUtils.readJsonFile = function (sourceFile) {
        return JSON.parse(SyncFileUtils.readTextFile(sourceFile));
    };
    SyncFileUtils.writeTextFile = function (targetPath, targetDataString) {
        fs_1.default.writeFileSync(targetPath, targetDataString, { encoding: 'utf8' });
    };
    SyncFileUtils.writeJsonFile = function (targetPath, targetData) {
        var targetDataString = JSON.stringify(targetData, null, 2);
        SyncFileUtils.writeTextFile(targetPath, targetDataString);
    };
    SyncFileUtils.copyTextFileWithReplacements = function (sourceFile, toFile, replacements) {
        var fileContentString = SyncFileUtils.readTextFile(sourceFile);
        lodash_1.keys(replacements).forEach(function (key) {
            var value = replacements[key];
            fileContentString = fileContentString.replace(key, value);
        });
        SyncFileUtils.writeTextFile(toFile, fileContentString);
    };
    SyncFileUtils.copyTextFileWithReplacementsIfMissing = function (sourceFile, toFile, replacements) {
        if (!SyncFileUtils.fileExists(toFile)) {
            SyncFileUtils.copyTextFileWithReplacements(sourceFile, toFile, replacements);
        }
        else {
            LOG.warn("Warning! File already exists: ", toFile);
        }
    };
    return SyncFileUtils;
}());
exports.SyncFileUtils = SyncFileUtils;

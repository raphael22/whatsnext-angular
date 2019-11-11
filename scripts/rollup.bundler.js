"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const rollup_1 = require("rollup");
const rollup_plugin_commonjs_1 = tslib_1.__importDefault(require("rollup-plugin-commonjs"));
const rollup_plugin_node_resolve_1 = tslib_1.__importDefault(require("rollup-plugin-node-resolve"));
const rollup_plugin_babel_1 = tslib_1.__importDefault(require("rollup-plugin-babel"));
const rollup_plugin_terser_1 = require("rollup-plugin-terser");
const rollup_plugin_peer_deps_external_1 = tslib_1.__importDefault(require("rollup-plugin-peer-deps-external"));
const rollup_plugin_analyzer_1 = tslib_1.__importDefault(require("rollup-plugin-analyzer"));
const rollup_plugin_visualizer_1 = tslib_1.__importDefault(require("rollup-plugin-visualizer"));
const moduleName = process.argv.find(arg => arg.match(/module/gi));
const debug = process.argv.find(arg => arg.match(/debug/gi));
console.log('Module Name:', moduleName);
console.log('Debug:', debug ? true : false);
const input = {
    input: `dist/${moduleName}/esm2015/index.js`,
    plugins: [
        rollup_plugin_peer_deps_external_1.default({
            packageJsonPath: path.resolve(`dist/${moduleName}/package.json`)
        }),
        rollup_plugin_babel_1.default({
            exclude: ['./node_modules/**']
        }),
        rollup_plugin_commonjs_1.default(),
        rollup_plugin_node_resolve_1.default({
            mainFields: ['browser', 'module']
        })
    ],
};
(function build() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let bundle = yield rollup_1.rollup(input);
        yield bundle.write({
            format: 'cjs',
            file: `dist/${moduleName}/${moduleName}.js`
        });
        input.plugins.push(...[
            rollup_plugin_terser_1.terser(),
            rollup_plugin_analyzer_1.default({
                summaryOnly: true,
                showExports: true
            }),
            rollup_plugin_visualizer_1.default({
                open: true,
                template: 'treemap'
            })
        ]);
        bundle = yield rollup_1.rollup(input);
        yield bundle.write({
            format: 'cjs',
            file: `dist/${moduleName}/${moduleName}.min.js`
        });
    });
})();

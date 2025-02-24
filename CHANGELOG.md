# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-02-24)

<section class="commits">

### Commits

<details>

-   [`12dcb7a`](https://github.com/stdlib-js/stdlib/commit/12dcb7a46950ebba30902c6a390a6c4244e5b1aa) - **docs:** update related packages sections [(#1421)](https://github.com/stdlib-js/stdlib/pull/1421) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="features">

### Features

-   [`c3079d2`](https://github.com/stdlib-js/stdlib/commit/c3079d227d7ab83141bc51c42bcf7501766baa86) - add `factory` method and remove options support

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`c89624e`](https://github.com/stdlib-js/stdlib/commit/c89624e9cf1cf779ac516881e224ddeb1e003f14) - improve type specificity

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`c3079d2`](https://github.com/stdlib-js/stdlib/commit/c3079d227d7ab83141bc51c42bcf7501766baa86): use `factory` method for seeding PRNG

    -   To migrate, users should use the `factory` method to create a
        seeded PRNG. Previously, users could provide options directly to
        the main export and `ndarray` method. This capability has been
        replaced with a `factory` method. This change aligns with
        conventions found elsewhere in the project where the main export
        uses an unseeded PRNG, and, in order to create a seeded variant,
        one needs to use a factory function.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`1df0360`](https://github.com/stdlib-js/stdlib/commit/1df03604e59abb35741ba3746a648f6343056e6d) - **test:** fix strides _(by Athan Reines)_
-   [`ddaba8a`](https://github.com/stdlib-js/stdlib/commit/ddaba8ad9d4111a87918caf1b9dda196a0b6eedd) - **test:** update parameter values _(by Athan Reines)_
-   [`95699ed`](https://github.com/stdlib-js/stdlib/commit/95699ed0481d885a0b8b3fcf7f95806567ff522e) - **chore:** add keyword _(by Athan Reines)_
-   [`c8c6eb6`](https://github.com/stdlib-js/stdlib/commit/c8c6eb665f758d191b80ec17a7be2adab7db0c26) - **bench:** rename variable and update parameter value _(by Athan Reines)_
-   [`2b9929f`](https://github.com/stdlib-js/stdlib/commit/2b9929f97c18a730f8b5adc540c384c3d9aee54d) - **docs:** update example values _(by Athan Reines)_
-   [`7b91fb7`](https://github.com/stdlib-js/stdlib/commit/7b91fb7b1d39d20e69583b4aa4f83106b719c137) - **docs:** fix description _(by Athan Reines)_
-   [`3e86122`](https://github.com/stdlib-js/stdlib/commit/3e861220f5a44afbd0cdd5edce73052fca43eedd) - **docs:** fix grammar _(by Athan Reines)_
-   [`3a197bd`](https://github.com/stdlib-js/stdlib/commit/3a197bd180d60b60aab185810e5a25f07b2b6e1a) - **test:** fix description _(by Athan Reines)_
-   [`c89624e`](https://github.com/stdlib-js/stdlib/commit/c89624e9cf1cf779ac516881e224ddeb1e003f14) - **fix:** improve type specificity _(by Athan Reines)_
-   [`35a2357`](https://github.com/stdlib-js/stdlib/commit/35a2357a766167d78ad2d5d20bad8c5dd9d605f9) - **docs:** fix description _(by Athan Reines)_
-   [`5d89d4a`](https://github.com/stdlib-js/stdlib/commit/5d89d4a68d4aa3cce4f0d9400f0f8f777bfb69e4) - **test:** add attribute tests _(by Athan Reines)_
-   [`c3079d2`](https://github.com/stdlib-js/stdlib/commit/c3079d227d7ab83141bc51c42bcf7501766baa86) - **feat:** add `factory` method and remove options support _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`7600ef8`](https://github.com/stdlib-js/stdlib/commit/7600ef8fd48c1e6799154d8929b37fa3cbcdd797) - **docs:** fix grammar _(by Athan Reines)_
-   [`57d81e4`](https://github.com/stdlib-js/stdlib/commit/57d81e4c196065f6680f08f22aeccfdc6e590b8f) - **docs:** update related packages sections [(#1151)](https://github.com/stdlib-js/stdlib/pull/1151) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="bug-fixes">

### Bug Fixes

-   [`c992ceb`](https://github.com/stdlib-js/stdlib/commit/c992cebaa3be5d820f9be8d276d9618b32709dca) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`c992ceb`](https://github.com/stdlib-js/stdlib/commit/c992cebaa3be5d820f9be8d276d9618b32709dca) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2023-07-31)

<section class="features">

### Features

-   [`4f4c99a`](https://github.com/stdlib-js/stdlib/commit/4f4c99a4f70902820a07ac28faf3bb9ee6fd16a6) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`4f4c99a`](https://github.com/stdlib-js/stdlib/commit/4f4c99a4f70902820a07ac28faf3bb9ee6fd16a6): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`f31a231`](https://github.com/stdlib-js/stdlib/commit/f31a2314107978b6852fc4348097d30ba990dd95) - **docs:** fix method name _(by Athan Reines)_
-   [`4f4c99a`](https://github.com/stdlib-js/stdlib/commit/4f4c99a4f70902820a07ac28faf3bb9ee6fd16a6) - **feat:** refactor declarations to use generics _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->


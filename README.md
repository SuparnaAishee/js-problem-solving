# PW2.01 Algorithm Problems

## PW2.01.01 Two Sum

### Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

- Each input has exactly one solution.
- You may not use the same element twice.
- The answer can be returned in any order.

### Example

#### Example 1:
**Input:**  
`nums = [2,7,11,15]`, `target = 9`  
**Output:**  
`[0,1]`  
**Explanation:** Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

#### Example 2:
**Input:**  
`nums = [3,2,4]`, `target = 6`  
**Output:**  
`[1,2]`

#### Example 3:
**Input:**  
`nums = [3,3]`, `target = 6`  
**Output:**  
`[0,1]`

### Constraints
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

---

## PW2.01.02 3Sum

### Problem Statement
Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that:
- `i != j`, `i != k`, and `j != k`
- `nums[i] + nums[j] + nums[k] == 0`
- The solution set must not contain duplicate triplets.

### Example

#### Example 1:
**Input:**  
`nums = [-1,0,1,2,-1,-4]`  
**Output:**  
`[[-1,-1,2],[-1,0,1]]`

#### Example 2:
**Input:**  
`nums = [0,1,1]`  
**Output:**  
`[]`

#### Example 3:
**Input:**  
`nums = [0,0,0]`  
**Output:**  
`[[0,0,0]]`

### Constraints
- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

---

## PW2.01.03 Remove Duplicates From Sorted Array

### Problem Statement
Given a sorted integer array `nums`, remove duplicates in-place so that each unique element appears only once.

- The order should be maintained.
- Return the number of unique elements (`k`).

### Example

#### Example 1:
**Input:**  
`nums = [1,1,2]`  
**Output:**  
`2, nums = [1,2,_]`

#### Example 2:
**Input:**  
`nums = [0,0,1,1,1,2,2,3,3,4]`  
**Output:**  
`5, nums = [0,1,2,3,4,_,_,_,_,_]`

### Constraints
- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.

---

## PW2.01.04 Next Permutation

### Problem Statement
Find the next lexicographically greater permutation of an array of integers.

- If no greater permutation exists, rearrange it to the lowest possible order.
- The transformation must be done in-place.

### Example

#### Example 1:
**Input:**  
`nums = [1,2,3]`  
**Output:**  
`[1,3,2]`

#### Example 2:
**Input:**  
`nums = [3,2,1]`  
**Output:**  
`[1,2,3]`

#### Example 3:
**Input:**  
`nums = [1,1,5]`  
**Output:**  
`[1,5,1]`

### Constraints
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

---

## PW2.01.05 Search Insert Position

### Problem Statement
Given a sorted array of distinct integers and a `target`, return the index where it would be inserted if not found.

- The algorithm must run in `O(log n)` time complexity.

### Example

#### Example 1:
**Input:**  
`nums = [1,3,5,6]`, `target = 5`  
**Output:**  
`2`

#### Example 2:
**Input:**  
`nums = [1,3,5,6]`, `target = 2`  
**Output:**  
`1`

#### Example 3:
**Input:**  
`nums = [1,3,5,6]`, `target = 7`  
**Output:**  
`4`

### Constraints
- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` contains distinct values sorted in ascending order.
- `-10^4 <= target <= 10^4`

# PW2.01.06 Longest Substring Without Repeating Characters

## Problem Statement
Given a string `s`, find the length of the longest substring without repeating characters.

### Example 1:
**Input:**  
`s = "abcabcbb"`

**Output:**  
`3`

**Explanation:**  
The answer is `"abc"`, with the length of `3`.

### Example 2:
**Input:**  
`s = "bbbbb"`

**Output:**  
`1`

**Explanation:**  
The answer is `"b"`, with the length of `1`.

### Example 3:
**Input:**  
`s = "pwwkew"`

**Output:**  
`3`

**Explanation:**  
The answer is `"wke"`, with the length of `3`.  
(Note: The answer must be a **substring**, `"pwke"` is a **subsequence**, not a substring.)

### Constraints:
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols, and spaces.

---

# PW2.01.07 Integer to Roman

## Problem Statement
Convert an integer to a **Roman numeral**.

### Roman Numerals:
| Symbol | Value  |
|--------|--------|
| I      | 1      |
| V      | 5      |
| X      | 10     |
| L      | 50     |
| C      | 100    |
| D      | 500    |
| M      | 1000   |

### Example 1:
**Input:**  
`num = 3`

**Output:**  
`"III"`

### Example 2:
**Input:**  
`num = 58`

**Output:**  
`"LVIII"`

**Explanation:**  
`L = 50`, `V = 5`, `III = 3`

### Example 3:
**Input:**  
`num = 1994`

**Output:**  
`"MCMXCIV"`

**Explanation:**  
`M = 1000`, `CM = 900`, `XC = 90`, `IV = 4`

### Constraints:
- `1 <= num <= 3999`

---

# PW2.01.08 Roman to Integer

## Problem Statement
Convert a **Roman numeral** to an integer.

### Roman Numerals:
| Symbol | Value  |
|--------|--------|
| I      | 1      |
| V      | 5      |
| X      | 10     |
| L      | 50     |
| C      | 100    |
| D      | 500    |
| M      | 1000   |

### Example 1:
**Input:**  
`s = "III"`

**Output:**  
`3`

### Example 2:
**Input:**  
`s = "LVIII"`

**Output:**  
`58`

**Explanation:**  
`L = 50`, `V = 5`, `III = 3`

### Example 3:
**Input:**  
`s = "MCMXCIV"`

**Output:**  
`1994`

**Explanation:**  
`M = 1000`, `CM = 900`, `XC = 90`, `IV = 4`

### Constraints:
- `1 <= s.length <= 15`
- `s` contains only the characters `'I', 'V', 'X', 'L', 'C', 'D', 'M'`.
- It is guaranteed that `s` is a valid Roman numeral in the range `[1, 3999]`.

---

# PW2.01.09 Longest Common Prefix

## Problem Statement
Find the **longest common prefix** string among an array of strings.  
If there is **no common prefix**, return an empty string `""`.

### Example 1:
**Input:**  
`strs = ["flower", "flow", "flight"]`

**Output:**  
`"fl"`

### Example 2:
**Input:**  
`strs = ["dog", "racecar", "car"]`

**Output:**  
`""`

**Explanation:**  
There is no common prefix among the input strings.

### Constraints:
- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only **lowercase English letters**.

---

# PW2.01.10 Valid Parentheses

## Problem Statement
Given a string `s` containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is **valid**.

### A string is valid if:
1. Open brackets must be **closed by the same type of brackets**.
2. Open brackets must be **closed in the correct order**.
3. Every closing bracket has a **corresponding opening bracket** of the same type.

### Example 1:
**Input:**  
`s = "()"`

**Output:**  
`true`

### Example 2:
**Input:**  
`s = "()[]{}"`

**Output:**  
`true`

### Example 3:
**Input:**  
`s = "(]"`

**Output:**  
`false`

### Constraints:
- `1 <= s.length <= 10^4`
- `s` consists of **only parentheses** `'()[]{}'`.


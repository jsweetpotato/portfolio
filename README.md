# Jsweetpotato Portofolio Site


### [VIEW PAGE](https://portfolio-jsweetpotato.web.app/)

<br>



## over rendering issues
When <code>[isSelected]</code> change
- span 재렌더
- image-slider 재렌더

isSelected 변경하면 기타 요소가 재렌더 될수 밖에 없는 구조..

<br>

---

<br>

## Image Slider Select Animation 

<br>

<code>[selected]</code> 초기값 null -> 셀렉한 target(listItem)을 selected.current으로 저장 

<br>

### selected 존재시 

1. 다른 listItem을 select했을 때 
  - [ ] 이전 target closing 애니메이션 재생 후
  - [ ] 클릭한 target을 current target으로 지정
  - [ ] current target opening 애니메이션 재생
    
2. 빈공간 셀렉시 
  - [ ] 이전 target closing 애니메이션 재생 후 
  - [ ] select target 을 null로 지정

3. 닫기 버튼 누를시
  - [ ] 이전 target closing 애니메이션 재생 후
  - [ ] open = false로 지정 

<br>


### selected 없을 때
1. 다른 listItem을 select했을 때
  - [ ] 클릭한 target을 current target으로 지정
  - [ ] current target opening 애니메이션 재생

3. 닫기 버튼 누를시
  - [ ] open = false로 지정 


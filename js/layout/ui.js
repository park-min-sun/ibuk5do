
$(document).ready(function (e) {
    // 비주얼영역 포인터 위치 인터랙션
    $(document).on('mousemove', 'html,body', function (e) {
        let $winWidth = $(window).outerWidth()  //브라우저 너비
        let $winHeight = $(window).outerHeight()  //브라우저 높이
        let $posX = e.clientX; //x좌표
        let $posY = e.clientY; //y좌표

        $('.visual .back.back02').css({ backgroundPositionX: 50 + ($posX / $winWidth * 3) + "%" });
        $('.visual .back.back03').css({ backgroundPositionX: 50 + ($posX / $winWidth * 5) + "%" });
        $('.visual .back.back04').css({ backgroundPositionX: 50 + ($posX / $winWidth * 7) + "%" });
        $('.visual .back.back05').css({ backgroundPositionX: 50 + ($posX / $winWidth * 9) + "%" });
        $('.visual .back.back06').css({ backgroundPositionX: 50 + ($posX / $winWidth * 11) + "%" });
        $('.visual .back.back07').css({ backgroundPositionX: 50 + ($posX / $winWidth * 13) + "%" });
        $('.visual .back.back08').css({ backgroundPositionX: 50 + ($posX / $winWidth * 15) + "%" });
    })



    // gnb 마우스오버 이벤트

    $(document).on('mouseover focusin', '#gnb', function () {
        $(this).closest('#header').addClass('active');
        $(this).closest('#header').addClass('show');
    })
    $(document).on('mouseout focusout', '#gnb', function () {
        $(this).closest('#header').removeClass('active');
        $(this).closest('#header').removeClass('show');
        $('#gnb .dep1 li').removeClass('active')

        if ($('#header').position().top !== 0) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    })

    // gnb 2뎁스 뒷배경 무빙
    $(document).on('mouseover focusout', '#gnb .dep1 > li', function () {
        let idx = $(this).index();
        let leng = $(this).closest('.dep1').children('li').length
        $('.dep2Box > span').css({ 'width': 'calc(100% / ' + leng + ')', 'left': 'calc((100% / ' + leng + ') *' + idx + ')' })
    })

    // gnb 3뎁스 보이기/숨기기
    $(document).on('click', '#gnb .dep2 > li > a', function () {
        $(this).closest('li').toggleClass('active').children('.dep3').stop().slideToggle(200)
        $(this).closest('li').siblings('li').removeClass('active').children('.dep3').stop().slideUp(200);
    })

    // gnb 2뎁스 뒷배경 무빙
    $(document).on('mouseover focusout', '#gnb .dep2 > li', function () {
        let idx = $(this).closest('.dep2').closest('.box').index();
        let leng = $('#gnb .dep1 > li').length
        $('.dep2Box > span').css({ 'width': 'calc(100% / ' + leng + ')', 'left': 'calc((100% / ' + leng + ') *' + idx + ')' })
    })

    // lnb 토글
    $(document).on('click', '#lnb .dep1 > li > a', function () {
        $(this).closest('li').toggleClass('active');
    })

    // 메인 사진 슬라이더 커스텀
    let slideIdx = 1;
    $(document).on('click', '.controlGroup button', function () {
        if ($(this).hasClass('next')) {
            if (slideIdx === $(this).closest('.controlGroup').siblings('.controlBox').find('.item').length - 1) {
                $(this).prop('disabled', true)
            }
            slideIdx++;
            $(this).siblings('button').prop('disabled', false)
            $('.slideBox .slideGroup').removeClass('on1 on2 on3').addClass('on' + slideIdx)
            $(this).closest('.controlGroup').siblings('.controlBox').find('.item').removeClass('active').eq(slideIdx).addClass('active')
        } else {
            if (slideIdx === 2) {
                $(this).prop('disabled', true).siblings('button').prop('disabled', false)
            }
            slideIdx--;
            $(this).siblings('button').prop('disabled', false)
            $('.slideBox .slideGroup').removeClass('on1 on2 on3').addClass('on' + slideIdx)
            $(this).closest('.item').removeClass('active').eq(slideIdx).addClass('active')
        }
        $(this).closest('.controlGroup').siblings('.controlBox').find('.item').eq(slideIdx - 1).addClass('active').siblings('.item').removeClass('active')

    });


    // 콤보박스 토글
    $(document).on('click', '.comboBox > a', function () {
        $(this).closest('.comboBox').toggleClass('active');
    });

    // 공유하기버튼 토글
    $(document).on('click', '.btnShareToggle', function () {
        $(this).toggleClass('active');
    });
    // 모바일 메뉴 열기
    $(document).on('click', '.btnSitemap', function () {
        $('#gnb,#dimmed').addClass('active');
		$('#header').toggleClass('show');
    });

    // 모바일 2뎁스 열기 (반응형 적용예정)
    $(document).on('click', '#gnb .dep1 > li > a', function () {
        let idx = $(this).closest('li').index();
        $(this).addClass('active').closest('li').siblings('li').children('a').removeClass('active');
        $('.dep2Box').children('.box').eq(idx).addClass('active').siblings('.box').removeClass('active')
    })

    // 모바일 gnb닫기
    $(document).on('click', '.btnSitemapClose', function () {
        $(this).closest('#gnb').removeClass('active');
        $('#dimmed').removeClass('active');
    })

    // 시설관리 - 청사전경 모바일 동쪽 서쪽 토글
    $(document).on('click', '.btnSide', function () {
        $(this).closest('.structure').toggleClass('right');
    });
    // 시설관리 - 청사전경 이미지 뷰어 띄우기
    $(document).on('click', '.cardArea:not(".type02,.type03,.type04") .item', function () {
        let img_origin = $(this).find('img').attr('src')
        $('#footer').after('\n' +
            '<div class="imgFull">\n' +
            '   <button type="button" class="btnImgClose mobile"><span class="hidden">닫기</span></button>\n' +
            '   <div class="inBox">\n' +
            '       <img src="' + img_origin + '"/>\n' +
            '       <button type="button" class="btnImgClose web"><span class="hidden">닫기</span></button>\n' +
            '   </div>\n' +
            '</div>')
        setTimeout(function () {
            $('.imgFull').addClass('active');
        })
    })

    // 시설관리 - 청사전경 이미지 뷰어 삭제
    $(document).on('click', '.imgFull .btnImgClose', function () {
        $(this).closest('.imgFull').removeClass('active');
        setTimeout(function () {
            $('.imgFull').remove();
        }, 400)
    })

    // 탭 토글
    $(document).on('click', '.tabList li', function () {
        var idx = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).children('a').attr('title', '선택됨').closest('li').siblings('li').children('a').attr('title', '');
        $(this).closest('.tabNav').siblings('.tabCont').eq(idx).addClass('active').siblings('.tabCont').removeClass('active');
    })


    // 기구및정원 탭토글
    $(document).on('click', '.orgArea .orgBox .group a', function (e) {
        e.preventDefault();
        let idx = $(this).closest('.orgBox').hasClass('type02') ? $(this).index() - 2 : $(this).index();// 조직,행정자문위원 없는지역(type02)은 index값 -2 적용 추가 (12/14 오인섭)
        console.log(idx);
        //$(this).addClass('active').siblings('li').removeClass('active');
        $(this).closest('.orgArea').siblings('.tabContWrap').find('.tabList').children('li')
            .eq(idx + 2).addClass('active').focus().attr("tabindex","0").siblings('li').removeClass('active');
        $(this).closest('.orgArea').siblings('.tabContWrap').find('.tabCont')
            .eq(idx + 2).addClass('active').siblings('.tabCont').removeClass('active');
        $('html,body').animate({ scrollTop: $('.tabContWrap.type02').offset().top - $('#header').outerHeight() }, 500)

        $('.tabList li').each(function () {
            if ($(this).hasClass('active')) {
                $(this).focus();
                $(this).attr('aria-selected', 'true');
            } else {
                $(this).attr('aria-selected', 'false');
            }
        })
    })

    $(document).on('click', '.btnLanguage', function () {

        if ($(this).hasClass('kor')) {
            window.location.href = '../html/main.html';
        } else {
            window.location.href = '../html/eng_1_인사말.html';
        }
    })

    /* btnImgClose 클릭시 팝업 닫힘 */
    $(document).on('click', '.layerFull2 .btnImgClose', function () {
        $(this).closest('.layerFull2').removeClass('active');
    });

    /* btnTop클릭시 상단으로 이동 */
    $(document).on('click', '.btnTop', function () {
    	if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
            window.scrollTo(0, 0)
        } else {
            
            $('html, body').animate({
                scrollTop: '0'
            }, 300);
        }
    });

    /* datePicker */
    if ($(".cal").length) {
        $(".cal").datepicker({
            dateFormat: "yy-mm-dd",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            yearSuffix: "년"
        });
    }

    /* 시군현황 팝업 열림*/
    $(document).on('click keypress', '.cardArea .item', function () {
        var $cardArea = $(this).closest('.cardArea');
        $cardArea.siblings('.popup').removeClass('active');
        $cardArea.siblings('.popup').attr("tabindex", "0").focus();

        if ($(this).hasClass('onItem01')) {
            $cardArea.siblings('.onPop01').addClass('active').after('<div class="dimmed"></div>');
        } else if ($(this).hasClass('onItem02')) {
            $cardArea.siblings('.onPop02').addClass('active').after('<div class="dimmed"></div>');
        } else if ($(this).hasClass('onItem03')) {
            $cardArea.siblings('.onPop03').addClass('active').after('<div class="dimmed"></div>');
        } else if ($(this).hasClass('onItem04')) {
            $cardArea.siblings('.onPop04').addClass('active').after('<div class="dimmed"></div>');
        } else if ($(this).hasClass('onItem05')) {
            $cardArea.siblings('.onPop05').addClass('active').after('<div class="dimmed"></div>');
        } else if ($(this).hasClass('onItem06')) {
            $cardArea.siblings('.onPop06').addClass('active').after('<div class="dimmed"></div>');
        } else if ($(this).hasClass('onItem07')) {
            $cardArea.siblings('.onPop07').addClass('active').after('<div class="dimmed"></div>');
        }
    })

    $(document).on('keypress', '.cardArea.type02 .item', function () {
        $(this).attr("tabindex","0").siblings().attr("tabindex", "-1");
    })

    /* btnImgClose 클릭시 팝업 닫힘 */
    $(document).on('click keypress', '.popup .btnClose', function () {
        var idx = $(this).closest('.popup').index();
        $(this).closest('.popup').siblings('.cardArea').children('.item').eq(idx -1).attr("tabindex","0").focus().siblings().attr("tabindex","0");
        $(this).closest('.popup').removeClass('active');
        setTimeout(function () {
            $('.dimmed, #dimmed').remove();
        }, 400)
    })

    /* 자주묻는질문 아코디언 토글 */
    $(document).on('click', '.accordion .dep1', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').next('.dep2').find('.row').slideToggle('fast');
        $(this).find('.dep2').find('.row').slideUp('fast');
    });

    $(document).on('click', '.mapTypeTool .mapBtn', function () {
        $(this).closest('li').addClass('active').siblings('li').removeClass('active');
        if ($(window).outerWidth() < 1008) {
            console.log($(window).outerWidth())
            $(this).closest('.mapTypeTool').addClass('hide')
        }
    })

    $(document).on('click', '.btnToolToggle', function () {
        $(this).closest('.mapTypeTool').toggleClass('hide');
    })

    $(document).on('click', '.btnMapView', function () {
        $('html,body').animate({ scrollTop: $(this).closest('.innerCont').position().top - $('#header').outerHeight() }, 500)
    })

    /* 접근성 03-22 */
    var tabList = $('.tabList li');
    $(document).ready(function (e) {
        $(tabList).on('click', function () {
                    //active에 따라 aria-selected
                    $(this).attr('aria-selected', 'true').siblings('li').attr('aria-selected', 'false');
                    $(this).attr('title', '선택됨').siblings('li').removeAttr('title');
                });

            $('.tabList li').each(function () {
                if ($(this).hasClass('active')) {
                    $(this).attr('aria-selected', 'true');
                    $(this).attr('title', '선택됨');
                } else {
                    $(this).attr('aria-selected', 'false');
                }
            });

            const tabindex = 0;
            $('.cardArea .item, .reservation li, .introArea .swiper-slide, .checkbox label').each(function () {
                if (this.type != "hidden") {
                    const $input = $(this);
                    $input.attr("tabindex", tabindex);
                }
            });

            $('#lnb .dep1 .hasDep a').on({
                "keypress": function (e) {
                    if (e.keyCode == 9) {
                        $(this).parents('.hasDep').addClass('active').siblings('.hasDep').removeClass('active');
                    }
                }
            })


            $('.checkbox label, .radio label').on({
                'keypress': function () {
                    $(this).siblings('input:checkbox, input:radio').prop('checked', function () {
                        return !$(this).prop('checked');
                    });
                }
            });

            $('.tabList li').wrapInner('<a href="javascript:void(0);"></a>');
            $('.titArea').wrapInner('<h3></h3>');
            $('.comboBox ul li a, .kakao').attr('title', '새 창 열림');


            let shareList = $('.shareList .btnShareToggle');
            $(shareList).attr('aria-expanded', 'false');
            $('.shareList .btnShareToggle .hidden').text('공유하기 펼치기');
            $(shareList).on({
                'click': function () {
                    let shareListText = $(this).children('.hidden');

                    if (!$(this).hasClass('active')) {
                        $(this).attr('aria-expanded', 'true');
                        shareListText.text('공유하기 접기');
                    } else {
                        $(this).attr('aria-expanded', 'false');
                        shareListText.text('공유하기 펼치기');
                    }
                }
            });

            $('#btnList').attr("href","#");

            $('.mapBoxGroup .mapTypeTool .btnToolToggle .hidden').text('숨기기');
            $('.mapBoxGroup .mapTypeTool .btnToolToggle').on({
                'click': function () {
                    $(this).children('.hidden').text(function (i, text) {
                        return text === "숨기기" ? "보이기" : "숨기기";
                    });
                }
            });

            $('.mapBoxGroup .mapTypeTool ul li').on({
                'click': function () {
                    console.log("ddd");
                    $(this).children('.mapBtn').attr('aria-pressed', 'true').closest('li').siblings('li').children('.mapBtn').attr('aria-pressed', 'false');
                    $(this).children('.mapBtn').attr('title', '선택됨').closest('li').siblings('li').children('.mapBtn').removeAttr('title');
                }
            });

            $('.mapBoxGroup .mapTypeTool ul li .mapBtn').each(function () {
                if ($(this).closest('li').hasClass('active')) {
                    $(this).attr('aria-pressed', 'true');
                    $(this).attr('title', '선택됨');
                } else {
                    $(this).attr('aria-pressed', 'false');
                }
            });

            $('.social .btnSocial').attr('title', '새 창 열림');
            $('table').removeAttr('summary'); //테이블 summary 모두제거
            $('.table.type06 caption').remove(); //배치용 테이블만 caption제거
            $('.loginForm .inputArea input:nth-child(1)').attr('title', '아이디');
            $('.loginForm .inputArea input:nth-child(2)').attr('title', '비밀번호');

            //71p
            $('#select_a7c12d5af42844439969b6a2599eee91').attr('title', '대강당 예약인원');
            $('#select_f810f6c16a774fbf817bd0df73284303').attr('title', '중강당 예약인원');
            $('#select_b67dd9d975b64cfba60bce0f6645fa76').attr('title', '소강당 예약인원');
            $('#select_c1f3dcc981954a23acbbefd2ce320598').attr('title', '한백스튜디오 예약인원');
            $('#select_9fb832d01399498398ce1a133156555c').attr('title', '회의실 예약인원');
            $('#st_hour_no').attr('title', '예약 시작시간');
            $('#en_hour_no').attr('title', '예약 종료시간');
            /* --- */

            $('.innerCont').attr('id', 'contents');
            $('.pagination a.active').attr('title', '현재 페이지');
            $('.titArea h3').contents().unwrap();
            $('.mainTask .txtArea .tit').contents().unwrap().wrap('<h3 class="tit"></h3>');
            $('.dojung h2, .sigunArea h2, .infoOpen h2').contents().unwrap().wrap('<strong class="tit"></strong>');
            $('.infoMain h2.tit, .infoMain h3.tit, .listArea h2.tit').wrap('<div class="tit"></div>').contents().unwrap();
            $('.introduceArea strong.tit').wrap('<h3 class="tit"></h3>').contents().unwrap();

            var $cardUrl = $('.cardArea.type04 .item').attr("onclick");
            $('.cardArea.type04 .item').attr("onkeypress", $cardUrl);

            //$('#lnb').before($('.innerCont'));


			$('#lnb .tit').contents().unwrap().wrap('<h3 class="tit"></h3>');
			$('.orgIntro .titTable').contents().unwrap().wrap('<h4 class="titTable"></h4>');
			// $('.cardArea.type02 .item').wrap('<a href="#"></a>');

			$('.innerCont.side').siblings('.innerCont').remove();
			$('#gnbDep1 li >a').attr('tabindex', '0');

			$('h3.tit').children('br').remove();

			$('.checkbox input[type="checkbox"]').attr('tabindex', '-1');


    });


    $(document).on('click keypress', '.btnArea button', function () {
        var $this = $(this);
        $(this).attr("tabindex","-1");
        $('.layerFull').addClass('active').attr("tabindex","0").focus();
    });

	$(document).on('mouseover focusin', '#gnb .dep2', function () {
        $(this).css("background","rgba(171,176,176,.3)").closest('li').siblings('li')
            .children('.dep2').css("background","none");
    })

    $(document).on('mouseleave focusout', '#gnb .dep2', function () {
        $(this).css("background","none");
    })

    // 모바일 2뎁스 열기 (반응형 적용예정)
    $(document).on('click', '#gnb .dep1 > li > a', function () {
        let idx = $(this).closest('li').index();
        $(this).addClass('active').closest('li').siblings('li').children('a').removeClass('active');
        $(this).siblings(".dep2").addClass("active").closest('li').siblings('li').children('.dep2').removeClass("active");
    })

    




    // $(document).ready(function () {
    //     $('#lnb').before($('#innerCont'));
    // });



})

// 스크롤이벤트
$(window).on({
    "scroll": function () {
        if ($('#header').offset().top !== 0) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    }
})

// 조직 및 연락처 타겟에 대한 탭,스크롤 이동함수
const org_link = (name, idx) => {
    const $name = $('#' + name);
    $(document).find('.tabContWrap').find('.tabList li').eq(idx).addClass('active').siblings().removeClass('active');
    $(document).find('.tabContWrap').find('.tabCont').eq(idx).addClass('active').siblings().removeClass('active');
    setTimeout(console.log($name.position().top), 500)
    $('html,body').animate({ scrollTop: $(window).outerWidth() > 768 ? $name.position().top - 120 : $name.position().top + 90 }, 500)
}

const org_tab = (name, idx) => {
    const $name = $('#' + name);
    $(document).find('.comboBox').removeClass('active');
    $(document).find('.tabContWrap').find('.tabCont').eq(idx - 1).addClass('active').siblings().removeClass('active');
}












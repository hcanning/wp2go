
<?php $uniqueId1 = $layout_id . get_row_index(); ?> <!--need dynamic ids for charts display-->
<div id="chart<?php echo $uniqueId1; ?>" class="p-2" style="height:460px"></div>
    <script defer>
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize the echarts instance
            var chartDom = document.getElementById('chart<?php echo $uniqueId1; ?>');
            var myChart = echarts.init(chartDom);
<?php
$style = get_sub_field('pie_chart_style');
 if($style == 'donut'): 
?>
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                color: [<?php
                        if (have_rows('chart_repeater')):
                            $colors = [];
                            while (have_rows('chart_repeater')): the_row();
                                $segment_color = get_sub_field('segment_color');
                                if (!empty($segment_color)):
                                    $colors[] = "'" . esc_js($segment_color) . "'";
                                endif;
                            endwhile;
                            echo !empty($colors) ? implode(',', $colors) : '';
                        endif;
                        ?>],
                series: [
                    {
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '15',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [<?php
                                if (have_rows('chart_repeater')):
                                    $items = [];
                                    while (have_rows('chart_repeater')): the_row();
                                        $segment_percent = get_sub_field('segment_percent');
                                        $segment_title   = get_sub_field('segment_title');
                                        // Escape backslashes first, then double quotes (since you're using double quotes in JS)
                                        $title_safe = str_replace(["\\", '"'], ["\\\\", '\\"'], $segment_title);
                                        $items[] = '{value:' . $segment_percent . ',name:"' . $title_safe . '"}';
                                    endwhile;
                                    echo implode(',', $items);
                                endif;
                                ?>]
                    }
                ]
            };

            option && myChart.setOption(option);

<?php endif; ?>

<?php
$style = get_sub_field('pie_chart_style');
 if($style == 'classic'): 
?>

var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [<?php
            if (have_rows('chart_repeater')):
                $items = [];
                while (have_rows('chart_repeater')): the_row();
                    $segment_percent = get_sub_field('segment_percent');
                    $segment_title   = get_sub_field('segment_title');
                    // Escape backslashes first, then double quotes (since you're using double quotes in JS)
                    $title_safe = str_replace(["\\", '"'], ["\\\\", '\\"'], $segment_title);
                    $items[] = '{value:' . $segment_percent . ',name:"' . $title_safe . '"}';
                endwhile;
                echo implode(',', $items);
            endif;
            ?>],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);

<?php endif; ?>
            // Resize chart on window resize using jQuery
            jQuery(window).on('resize', function() {
                myChart.resize();
            });
        });
    </script>
